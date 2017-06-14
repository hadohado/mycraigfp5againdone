

--------------------------------------------------------------------------------------------
commands:

npm init
npm link
# npm WARN craigsource@1.0.0 No repository field.
# /usr/local/lib/node_modules/craigsource -> /Applications/XAMPP/xamppfiles/htdocs/npmpkgmy

npm test

# if test is ok, this is the print out:
# 
# 
# > craigsource@1.0.0 test /Applications/XAMPP/xamppfiles/htdocs/npmpkgmy
# > node ./test/craigsource.js
# 

# if test fail, this is the print out:
#
# > craigsource@1.0.0 test /Applications/XAMPP/xamppfiles/htdocs/npmpkgmy
# > node ./test/craigsource.js
# assert.js:81
#   throw new assert.AssertionError({
#   ^
# AssertionError: Expected "Hi from craigsource module". Got "xxx Hi from craigsource module"
#     at Object.<anonymous> (/Applications/XAMPP/xamppfiles/htdocs/npmpkgmy/test/craigsource.js:8:8)
#     at Module._compile (module.js:571:32)
#     ..
# npm ERR! Test failed.  See above for more details
