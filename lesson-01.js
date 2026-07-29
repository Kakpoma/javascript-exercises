"use strict";

// Lesson 01 exercise: Running JavaScript three ways
// Clone the exercise repository for this course, https://github.com/Leon-Arno/JS-Exercises, to
// your computer.
// Make the copy your own. Inside the cloned folder, delete the `.git` folder to remove the
// connection to the original repository: run `rm -rf .git` on macOS and Linux, or `Remove-Item
// -Recurse -Force .git` in PowerShell on Windows.
// Run `git init` in the folder, create a new empty repository named `javascript-exercises` on
// your own GitHub account, connect it as the remote, and push. This is the same publishing
// flow you performed in the Git course.
// Create a branch named `lesson-01-exercise` and switch to it, then open `lesson-01.js`. The
// questions are already inside as comments; work through them in order, writing your answers
// directly beneath each one.

// TODO: Part one.
// Start the Node REPL and evaluate at least four arithmetic expressions of your own, using
// more than one operator across them. Copy the complete session transcript and paste it into
// `lesson-01.js` as a comment block where the question asks for it.
// PS C:\Users\mawul\Music\startupistan-practice\JS> node
// Welcome to Node.js v24.14.0.
// Type ".help" for more information.
// > 5 + 9
// 14
// > 28 - 9
// 19
// > 90 /123
// 0.7317073170731707
// > 80 * 909
// 72720
// >

// TODO: Part two.
// Write a `console.log` line in `lesson-01.js` that prints a greeting, save the file
// deliberately, and run it with `node lesson-01.js`.
console.log("Hello and weliends!");

// TODO: Part three.
// Change the greeting text, run the file again without saving, and observe that the output has
// not changed. Save and run once more, then describe in a one-sentence comment what happened
// and why.
// The output did not change because the file was not saved, so Node executed the previous version of the file.

// TODO: Part four.
// Run your greeting line in the Chrome DevTools Console. In a comment, record one way the
// experience matched Node and one way it differed.
// Both node.js and devtools run the line in the same manner, but where devtools runs the line, node.js runs the file.

// TODO: Part five.
// From a folder that does not contain the file, deliberately run `node lesson-01.js` so that
// the terminal reports it cannot find the file. Paste that error transcript as a comment, then
// explain in one sentence how you resolved it.
// node:internal/modules/cjs/loader:1459
//   throw err;
//   ^

// Error: Cannot find module 'C:\Users\mawul\lesson-01.js'
//     at Module._resolveFilename (node:internal/modules/cjs/loader:1456:15)
//     at defaultResolveImpl (node:internal/modules/cjs/loader:1066:19)
//     at resolveForCJSWithHooks (node:internal/modules/cjs/loader:1071:22)
//     at Module._load (node:internal/modules/cjs/loader:1242:25)
//     at wrapModuleLoad (node:internal/modules/cjs/loader:255:19)
//     at Module.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:154:5)
//     at node:internal/main/run_main_module:33:47 {
//   code: 'MODULE_NOT_FOUND',
//   requireStack: []
// }
// I navigated to the folder that contains the file and ran lesson-01.js again, which resolved the issue.
// TODO: Save the file, commit your work with a clear message, push the branch, and open a pull
// request into your main branch.
// TODO: Submit the link to the pull request for review.
