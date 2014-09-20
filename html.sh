cat test/fixture/globals.json | dmd --partial 'html/**/*.hbs' --template html/docs.hbs > test/expected/globals.html;
cat test/fixture/file-set.json | dmd --partial 'html/**/*.hbs' --template html/docs.hbs > test/expected/file-set.html;
cat test/fixture/handbrake.json | dmd --partial 'html/**/*.hbs' --template html/docs.hbs > test/expected/handbrake.html;
cat test/fixture/everything.json | dmd --partial 'html/**/*.hbs' --template html/docs.hbs > test/expected/everything.html;
cat test/fixture/lodash.json | dmd --partial 'html/**/*.hbs' --template html/docs.hbs > test/expected/lodash.html;
cat test/fixture/debaser.json | dmd --partial 'html/**/*.hbs' --template html/docs.hbs > test/expected/debaser.html;
cat test/fixture/MapView.json | dmd --partial 'html/**/*.hbs' --template html/docs.hbs > test/expected/MapView.html;
