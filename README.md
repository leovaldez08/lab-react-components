![Logo-nav](https://s3.ap-south-1.amazonaws.com/kalvi-education.github.io/front-end-web-development/Kalvium-Logo.png)

# Kalvium Lab | Let's rebuild

## Learning Goals

In this exercise, the goal is to understand and experiment around custom components. We will try to make our own components.

## Getting started

1. Fork this repo
2. Clone this repo

Whenever you create a first significant change, you should make your first commit.

3. Follow these [guidelines to add, commit and push changes](https://github.com/FACEPrep-ProGrad/general-guidelines-labs-project-builders.git).

In the end of this document, you will find guidelines on how to submit the exercise.

### Introduction

For this particular exercise -> the entire code for the webpage is given to you. But the problem is - everything is in a single file - ie: `App.js`.
Your task is to make the code for this lab more structured by creating `components` and then rendering those `components` inside `App.js`.

One example is already given to you -> you can observe how `footer` of this webpage has it's own component by the name `GallaryFooter.js` - and is being rendered in `App.js` file.
Similarly, you have to create `components` for `header` section and  `body` section.
**Remember** -> your data should also be in a different `component`. ( you can then use `props` to access it)

### Steps to follow:
1. Clone this repository.
2. On your terminal go inside `lab-react-jsx-boilerplate` directory and use the following command:
   `npm install i`
   This command install's all the packages to your system that this project is using.

### Keep in mind:
Just keep in mind -> how will you manage the styles for each component. ( For now all the styling for this webpage is done inside `App.css` file).
So is it a good idea to add all your css inside a single file, or should you have different files for different `components`🧐.

### Output:
You should be able to produce the same webpage -- that you currently have from the code provided to you.
   
Happy Coding Kalvium ❤️!
