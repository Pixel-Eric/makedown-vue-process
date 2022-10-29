import config from '../../compiler/webpack.config.js';
import webpack from 'webpack';

export function compiler() {
    let _compiler = webpack(config);
    _compiler.run((err, result) => {
        if (err) {
            console.error(err);
        }
    })
}
