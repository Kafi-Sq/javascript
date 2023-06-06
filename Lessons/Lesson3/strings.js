'Hello'

// Concatenation
'Some' + 'text'

// Checking type of variables
typeof 'hello'
typeof 23

// Type conversion
'Hello' + 2 // this becomes 'Hello2'

'$' + 20.95 + 7.99 // $20.957.99 - Type conversion
'$' + (20.95 + 7.99) // strings also follow the order of operations
'$' + (2095 + 799) / 100 // Avoids the problem of floats

// Run in chrome console
'Items (' + (1+1) + '): ' + '$' + (2095 + 799) / 100

// Strings use both single and double quotes but there are situations where double quotes might be useful
'hello'
"hello"
"i'm hello"

// Escapte character - \' make a single quote that doesn't end a string
'i\'m learning Javascript'
// \" - Makes a double quote without ending a string
// \n - Makes a new line

// Template strings
`hello`
// Interpolation
`Items (${1+1}): $${(2095 + 799) / 100}`
// Multiline text - 'some \n text'
`some
text`