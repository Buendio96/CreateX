const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const mode = process.env.NODE_ENV || 'development';
const devMode = mode === 'development';

const target = devMode ? 'web' : 'browserslist';
const devtool = devMode ? 'source-map' : undefined;

module.exports = {
	mode,
	target,
	devtool,
	devServer: {
		port: 4300,
		open: true,
		hot: true
	},
	entry: path.resolve(__dirname, './src/main.js'),
	output: {
		path: path.resolve(__dirname, 'dist'),
		clean: true,
		filename: '[name].[contenthash].js',
		assetModuleFilename: 'assets'
	},
	resolve: {
		extensions: [
			'.html', '.js', '.ts', '.json', '.css', '.scss', '.png', '.jpg',
		],
		alias: {
			'@': path.resolve(__dirname, 'src'),
			'@fonts': path.resolve(__dirname, 'src/fonts'),
			'@img': path.resolve(__dirname, 'src/img'),
			'@libs': path.resolve(__dirname, 'src/libs'),
			'@modules': path.resolve(__dirname, 'src/modules'),
			'@styles': path.resolve(__dirname, 'src/styles'),
		}
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: path.resolve(__dirname, './src/index.html')
		}),
		new MiniCssExtractPlugin({
			filename: '[name].[contenthash].css'
		}),
	],
	module: {
		rules: [{
			test: /\.html$/i,
			loader: 'html-loader'
		}, {
			test: /\.(c|sa|sc)ss$/i,
			use: [
				devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
				'css-loader', {
					loader: 'postcss-loader',
					options: {
						postcssOptions: {
							plugins: [require('postcss-preset-env')]
						}
					}
				}, 'sass-loader'
			],
		}, {
			test: /\.(?:js|mjs|cjs)$/i,
			exclude: /node_modules/,
			use: {
				loader: 'babel-loader',
				options: {
					presets: [[
						'@babel/preset-env',
						{ targets: "defaults" }
					]],
					plugins: [
						'@babel/plugin-proposal-class-properties',
					]
				}
			}
		}, {
			test: /\.(woff|woff2|ttf)$/i,
			type: 'asset/resource',
			generator: {
				filename: 'assets/fonts/[name].[ext]'
			}
		}, {
			test: /\.(jpe?g|png|webp|gif|svg)$/i,
			use: [{
				loader: 'image-webpack-loader',
				options: {
					mozjpeg: {
						progressive: true,
					},
					optipng: {
						enabled: false,
					},
					pngquant: {
						quality: [0.65, 0.90],
						speed: 4
					},
					gifsicle: {
						interlaced: false,
					},
					webp: {
						quality: 75
					}
				}
			}],
			type: 'asset/resource',
			generator: {
				filename: `assets/image/${devMode ? '[contenthash]' : '[name]'}.[ext]`
			}
		}]
	}
};