cat test/fixture/globals.json | dmd --partial 'html/**/*.hbs' --template html/docs.hbs > tmp/globals.html; 
cat test/fixture/file-set.json | dmd --partial 'html/**/*.hbs' --template html/docs.hbs > tmp/file-set.html; 
cat test/fixture/handbrake.json | dmd --partial 'html/**/*.hbs' --template html/docs.hbs > tmp/handbrake.html; 
cat test/fixture/everything.json | dmd --partial 'html/**/*.hbs' --template html/docs.hbs > tmp/everything.html;
cat test/fixture/lodash.json | dmd --partial 'html/**/*.hbs' --template html/docs.hbs > tmp/lodash.html;
cat test/fixture/debaser.json | dmd --partial 'html/**/*.hbs' --template html/docs.hbs > tmp/debaser.html;
cat test/fixture/MapView.json | dmd --partial 'html/**/*.hbs' --template html/docs.hbs > tmp/MapView.html;
