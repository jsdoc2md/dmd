cat test/fixture/globals.json | dmd --partial 'html/**/*.hbs' --template html/docs.hbs > tmp/globals.html; 
cat test/fixture/file-set.json | dmd --partial 'html/**/*.hbs' --template html/docs.hbs > tmp/file-set.html; 
cat test/fixture/handbrake.json | dmd --partial 'html/**/*.hbs' --template html/docs.hbs > tmp/handbrake.html; 
cat test/fixture/everything.json | dmd --partial 'html/**/*.hbs' --template html/docs.hbs > tmp/everything.html;
