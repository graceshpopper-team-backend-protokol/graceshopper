module.exports = {
  entry: ["./client/index.js"],
  output: {
    path: __dirname + "/public",
    filename: "bundle.js",
  },
  context: __dirname,
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        options: {
          presets: ["@babel/preset-env", "@babel/preset-react"],
        },
      },
      {
        test: /\.(css)$/,
<<<<<<< HEAD
        use: ["style-loader", "css-loader"],
      },
=======
        use: ['style-loader', 'css-loader'],
      }
>>>>>>> d22441e26869ef67a098035c2265e96da1b6d751
    ],
  },
};
