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
const prodMode = mode === 'production'
const devtool = devMode ? 'source-map' : undefined;
//=================================================================
const fileName = ext => devMode ? `[name].${ext}` : `[contenthash].${ext}`;

const pagesDir = path.resolve(__dirname, './src/pages');
const pageFiles = fs.readdirSync(pagesDir);
const HTML_PLUGINS = pageFiles.map((file) => {
	return new HtmlWebpackPlugin({
		template: path.resolve(pagesDir, file),
		filename: path.join('pages', file)
	})
}
);

const optimization = () => {
	const config = {
		splitChunks: {
			chunks: 'all'
		}
	}
	if (prodMode) {
			config.minimizer = [
				new CssMinimizerPlugin(),
				new TerserPlugin()
			]
	}
	return config
};
//=================================================================
module.exports = {
	devtool,
	target: 'web',
	mode: 'development',
	optimization: optimization(),
	devServer: {
		port: 4300,
		open: true,
		hot: true
	},
	entry: path.resolve(__dirname, './src/main.js'),
	output: {
		path: path.resolve(__dirname, 'dist'),
		clean: true,
		filename: fileName('js'),
		assetModuleFilename: 'assets'
	},
	resolve: {
		extensions: [
			'.html', '.js', '.ts', '.json', '.css', '.scss', '.png', '.jpg',
		],
		alias: {
			'@': path.resolve(__dirname, 'src'),
			'@fonts': path.resolve(__dirname, 'src/assets/fonts'),
			'@img': path.resolve(__dirname, 'src/assets/iamges'),
			'@icons': path.resolve(__dirname, 'src/assets/icons'),
			'@styles': path.resolve(__dirname, 'src/styles'),
			'@libs': path.resolve(__dirname, 'src/libs'),
			'@components': path.resolve(__dirname, 'src/components'),
		}
	},
	//=================================================================
	plugins: [
		new HtmlWebpackPlugin({
			template: path.resolve(__dirname, './src/index.html'),
			filename: fileName('html'),
			minimizer: prodMode
		}),
		...HTML_PLUGINS,
		new MiniCssExtractPlugin({
			filename: fileName('css')
		}),
		new CopyWebpackPlugin({
			patterns: [
				{
					from: path.resolve(__dirname, './src/assets/icons'),
					to: path.resolve(__dirname, 'dist/assets/icons')
				}
			]
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
			loader: 'handlebars-loader'
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