const path = require('path');
const fs = require('fs');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
//=================================================================
const mode = process.env.NODE_ENV || 'development';
const devMode = mode === 'development'
const prodMode = !devMode
const devtool = devMode ? 'source-map' : undefined;
//=================================================================
const fileName = ext => devMode ? `[name].${ext}` : `[contenthash].${ext}`;

const pages = ['About', 'Services', 'Work', 'News', 'Contacts',];
const HTML_PLUGINS = () => {
	return pages.map((page) => new HtmlWebpackPlugin({
		template: path.resolve(__dirname, `src/pages/${page}.hbs`),
		filename: `${page}.html`,
		minify: prodMode,
		chunks: ['main', `${page}`],
		templateParameters: {
			'filename': `${page}`,
			'favicon': '/assets/icons/favicon.ico'
		}
	}))
}
//=================================================================
const optimization = () => {
	const config = {
		splitChunks: {
			chunks: 'all'
		}
	}
	if (prodMode) {
		config.minimize = true
		config.minimizer = [
			new CssMinimizerPlugin(),
			new TerserPlugin({
				extractComments: false,
			})
		]
	}
	return config
};
//=================================================================
module.exports = {
	devtool,
	target: 'web',
	mode: 'development',
	devServer: {
		port: 4300,
		open: true,
		hot: true,
	},
	optimization: optimization(),
	entry: {
		main: path.resolve(__dirname, 'src/scripts/main.js'),
		News: path.resolve(__dirname, 'src/scripts/news.js'),
	},
	output: {
		path: path.resolve(__dirname, 'dist'),
		clean: true,
		filename: 'scripts/' + fileName('js'),
		assetModuleFilename: 'assets'
	},
	resolve: {
		extensions: [
			'.html', '.hbs', '.js', '.ts', '.json', '.css', '.scss', '.png', '.jpg',
		],
		alias: {
			'@': path.resolve(__dirname, 'src'),
			'@fonts': path.resolve(__dirname, 'src/assets/fonts'),
			'@styles': path.resolve(__dirname, 'src/styles'),
			'@common': path.resolve(__dirname, 'src/styles/common'),
			'@modules': path.resolve(__dirname, 'src/styles/modules'),
			'@js': path.resolve(__dirname, 'src/scripts'),
			'@libs': path.resolve(__dirname, 'src/libs'),
			'@pages': path.resolve(__dirname, 'src/pages'),
		}
	},
	//=================================================================
	plugins: [
		new HtmlWebpackPlugin({
			template: path.resolve(__dirname, 'src/CreateX.hbs'),
			filename: 'index.html',
			chunks: ['main'],
			minify: prodMode,
			templateParameters: {
				'filename': 'CreateX',
				'favicon': '/assets/icons/favicon.ico',
			}
		}),
		...HTML_PLUGINS(),
		new MiniCssExtractPlugin({
			filename: 'styles/' + fileName('css')
		}),
		new CopyWebpackPlugin({
			patterns: [{
				from: path.resolve(__dirname, 'src/assets/icons'),
				to: path.resolve(__dirname, 'dist/assets/icons')
			}, {
				from: path.resolve(__dirname, 'src/assets/vendors'),
				to: path.resolve(__dirname, 'dist/assets/vendors')
			}]
		})
	],
	//=================================================================
	module: {
		rules: [{
			test: /\.(c|sa|sc)ss$/i,
			use: [
				MiniCssExtractPlugin.loader,
				'css-loader',
				{
					loader: 'postcss-loader',
					options: {
						postcssOptions: {
							plugins: [require('postcss-preset-env')]
						}
					}
				},
				'sass-loader',
			],
		}, {
			test: /\.hbs$/,
			loader: "handlebars-loader",
			options: {
				partialDirs: [path.join(__dirname, 'src/pages/templates')]
			}
		}, {
			test: /\.(?:js|mjs|cjs)$/i,
			exclude: /node_modules/,
			use: {
				loader: 'babel-loader',
				options: {
					presets: [[
						'@babel/preset-env',
						{
							targets: "defaults",
						}
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
				filename: `assets/fonts/${fileName('[ext]')}`
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
				filename: `assets/images/${fileName('[ext]')}`
			}
		}]
	}
};