/**
 * Gruntfile
 *
 * This Node script is executed when you run `grunt` or `sails lift`.
 * It's purpose is to load the Grunt tasks in your project's `tasks`
 * folder, and allow you to add and remove tasks as you see fit.
 * For more information on how this works, check out the `README.md`
 * file that was generated in your `tasks` folder.
 *
 * WARNING:
 * Unless you know what you're doing, you shouldn't change this file.
 * Check out the `tasks` directory instead.
 */

module.exports = function(grunt) {

  grunt.config.set('ts', {
        dev: {
            files: [
                {
                    src: [
                        'src/**/*.ts'
                    ],
                    dest: 'api'
                }
            ],

            options: {
                sourceMap: false,// Useless on the server side.
                declaration: true,// Always useful to have declarations available.
                noEmitOnError: false,// Force log errors.
                failOnTypeErrors: true,// Force log grunt errors pipeline.
                verbose: true,
                outDir:'api',
                rootDir:'src',
                watch:'.',
                module: 'commonjs',
                target:'es5'
            }
        }
  });
  grunt.loadNpmTasks('grunt-ts');
  grunt.registerTask('default', ['ts:dev']);

};
