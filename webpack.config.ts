import { MultiConfigurationFactory } from "webpack";
import webpack = require("webpack");
import { join } from "path";
import { BundleAnalyzerPlugin } from "webpack-bundle-analyzer";
import HtmlWebpackPlugin from "html-webpack-plugin";

const getDevTool = (mode: string): webpack.Options.Devtool =>
    mode === "production" ? "source-map" : "inline-source-map";

const getResolveExtensions = (): webpack.Resolve => ({
    extensions: [".ts", ".js", ".json"],
});

const getEntryPoints = (): string[] => {
    return [join(__dirname, "src/index.ts")];
};

const getWebpackOutput = (subpath: string): webpack.Output => ({
    path: join(__dirname, `/dist/${subpath}`),
});

const getTsLoaderRuleSet = (tsConfigFilePath: string): webpack.RuleSetUseItem => ({
    loader: "ts-loader",
    options: {
        configFile: join(__dirname, tsConfigFilePath),
        colors: true,
    },
});

const getBabelRuleSet = (): webpack.RuleSetUseItem => ({
    loader: "babel-loader",
    options: {
        presets: [
            [
                "@babel/preset-env",
                {
                    useBuiltIns: "usage",
                    corejs: "3",
                    debug: false,
                    ignoreBrowserslistConfig: true,
                    targets: {
                        browsers: [
                            ">= 1%",
                            "last 1 major version",
                            "not dead",
                            "Chrome >= 45",
                            "Firefox >= 38",
                            "Edge >= 12",
                            "Explorer >= 10",
                            "iOS >= 9",
                            "Safari >= 9",
                            "Android >= 4.4",
                            "Opera >= 30",
                        ],
                    },
                },
            ],
        ],
    },
});

const getHtmlLoader = (): webpack.RuleSetRule => ({
    test: /\.html$/,
    loader: "html-loader",
});

const getOptimization = (): webpack.Options.Optimization => ({
    splitChunks: {
        chunks: "all",
        maxInitialRequests: Infinity,
        minSize: 0,
        cacheGroups: {
            // Externalize all includes from node_modules except core-js
            vendor: {
                chunks: "all",
                test: /[\\/]node_modules[\\/]/,
                priority: 20,
            },
            // Create a common chunk for reusable code
            common: {
                name: "common",
                minChunks: 2,
                chunks: "async",
                priority: 10,
                reuseExistingChunk: true,
                enforce: true,
            },
        },
    },
});

/**
 * Analyze bundle size
 */
const getBundleAnalyzerPlugin = (): BundleAnalyzerPlugin => {
    const bundleAnalyzerPlugin = new BundleAnalyzerPlugin({
        analyzerMode: "disabled",
        generateStatsFile: true,
    });
    return bundleAnalyzerPlugin;
};

const getHtmlWebpackPlugin = (): HtmlWebpackPlugin => {
    const htmlWebpackPlugin = new HtmlWebpackPlugin({
        hash: true,
        title: "romcal - Test Page",
        template: "src/index.html",
        base: "./dist",
        meta: {
            charset: {
                charset: "utf-8",
            },
            "X-UA-Compatible": {
                "http-equiv": "X-UA-Compatible",
                content: "IE=edge",
            },
        },
        minify: false,
    });
    return htmlWebpackPlugin;
};

const configurations: MultiConfigurationFactory = (env, { mode }) => [
    // ESM
    {
        devtool: getDevTool(mode),
        resolve: getResolveExtensions(),
        target: "web",

        entry: {
            romcal: [...getEntryPoints()],
        },

        output: {
            ...getWebpackOutput("esm"),
            filename: "index.js",
            chunkFilename: "[name].[chunkhash].js",
            libraryTarget: "commonjs2",
            libraryExport: "default",
            library: "Romcal",
        },

        module: {
            rules: [
                {
                    test: /\.ts(x?)$/,
                    exclude: [/node_modules/, "/src/**/*.test.ts"],
                    use: [getTsLoaderRuleSet("tsconfig.json")],
                },
            ],
        },

        optimization: getOptimization(),
    },
    // ES5
    {
        devtool: getDevTool(mode),
        resolve: getResolveExtensions(),
        target: "web",

        entry: {
            romcal: [join(__dirname, "src/index.es5.ts"), ...getEntryPoints()],
        },

        output: {
            ...getWebpackOutput("es5"),
            filename: "[name].bundle.es5.js",
            chunkFilename: "[name].bundle.es5.js",
            crossOriginLoading: "anonymous",
            libraryTarget: "umd",
            libraryExport: "default",
            library: "romcal",
            jsonpFunction: "romcalWebpackJsonpFunction",
            globalObject: "window",
            auxiliaryComment: "romcal - The Liturgical Calendar generator",
        },

        module: {
            rules: [
                getHtmlLoader(),
                {
                    test: /\.ts(x?)$/,
                    exclude: [/node_modules/, "/src/**/*.test.ts"],
                    use: [getBabelRuleSet(), getTsLoaderRuleSet("tsconfig.json")],
                },
            ],
        },

        optimization: getOptimization(),

        plugins: [getBundleAnalyzerPlugin(), getHtmlWebpackPlugin()],
    },
];

export default configurations;