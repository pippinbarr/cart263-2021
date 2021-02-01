# Introducing ml5.js {

---

## Summary

[ml5.js](https://ml5js.org/) is a JavaScript library designed to give you access to artificial intelligence in the form of machine learning. It provides simplified versions of existing machine learning algorithms and models that you can use in your projects!


---

## Contents

* What is ml5.js?
* Meeting ml5.js

---

## What is ml5.js?

[ml5.js](https://ml5js.org) is a **machine learning** library designed with a similar spirit and philosophy to [p5.js](http://p5js.org/). That is, it's designed to give us simplified access to some of the power of machine learning!

### What is machine learning though?

**What is machine learning**, you ask? Well that's more complex that we have the time to get into here, but you've almost certainly heard about it as the most used form of **artificial intelligence** these days.

### How does it work?

Generally speaking, a key idea behind machine learning is **teaching** a computer how to do some task by showing it lots and lots and lots of examples of that task. The easiest version of this to understand is called **supervised learning**. So if you want to teach a machine to recognize images with cats in them, you show it many pictures with cats and also lots of picture without cats and you **tell it** which is which. It then generalizes from this data to be able to identify pictures with cats that it has **never seen**. (Through the magic underlying machine learning algorithms and structures, notably neural networks.)

### Pre-trained models

For our purposes, we're not going to worry about this process much. The beauty of ml5.js is that it provides access to **pre-trained models and algorithms** from machine learning so that we don't need to do that quite complicated step, we just get access to the results!

Thus, ml5.js will give us access to things like hand and face recognition, object classification, sound classification, and more. And it's comparatively easy to use!

### Ethics and bias

Something to keep in mind when you're using any technology is how it relates to structures of power in society, particularly in terms of how it might interact with marginalized communities. ml5.js is particularly attuned to this in the context of machine learning, which is quite lovely.

Specifically, a huge topic to think about in this domain is how the models we use were **trained** and what **data** they were trained on:

If a face recognition model is only trained on pictures of white people, guess what? It is best at recognizing white people! That's "fine" if it's marketed as a "White Face Recognizer", but all too often we think of technology as more general and "pure" than this. If facial recognition gets out there in common use that's tuned to a specific group and excludes other groups, that's a problem. (Think about the whole [Kodak film skin color bias thing](https://www.npr.org/2014/11/13/363517842/for-decades-kodak-s-shirley-cards-set-photography-s-skin-tone-standard)!)

In short, we should care about the provenance of the data that trains our machine learning models, and should always take a critical stance toward those models especially with regard to potential socio-cultural (and other) issues.

---

## Meeting ml5.js

Let's start out by meeting ml5.js via its homepage and documentation and examples. This fits in with the first steps of a general philosophy for meeting new libraries:

1. **Go to the homepage** and read the introductory material
2. **Find resources** provided for learning the library, especially **examples** and **tutorials** and most fundamentally the **API**
3. **Look at examples** to get a broad sense of the usage

---

## Go to the homepage

The ml5.js homepage is at [https://ml5js.org/](https://ml5js.org/). It warmly describes the library as

> A neighborly approach to creating and exploring artificial intelligence in the browser

So this is a library all about accessibility.

### Building blocks

We see mention of [TensorFlow](https://www.tensorflow.org/) which is a Google-based project providing access to the full scale of machine-learning. In particular, ml5.js builds on [TensorFlow.js](https://www.tensorflow.org/js) which is a version of TensorFlow for JavaScript and the browser. You can dive very, very deep into all of this and you should if you want to!

However, the point of ml5.js is to "hide" these things behind a significantly easier to use API, including **pre-trained** models rather than training your own. As they say:

> ml5.js provides immediate access in the browser to pre-trained models for detecting human poses, generating text, styling an image with another, composing music, pitch detection, and common English language word relationships, and much more.

### Ethics

ml5.js has an overt commitment to the ethical, cultural, and political issues surrounding machine learning and particularly data bias:

> ml5.js aims to support broader public understanding of machine learning and foster deeper engagement with ethical computing, responsible data collection, and accessibility and diversity of people and perspectives in technology and the arts.

No Justice, No Peace.

### Approachable API

The homepage contains a code example of using ml5.js and we can at least see just how **little** code it required to get the basics up and running. Very few lines of code for something that turns out to be an object classification AI. This is very, very impressive.

### General examples

The homepage provides some basic categories of examples of machine learning work possible via ml5.js. In particular they point to PoseNet (body pose recognition), YOLO (image classification), pix2pix (image style transfer), and doodle generation.

There's no question these are some incredibly powerful possibilities and it's worth stepping back for a moment to marvel that we could possibly have access to this stuff. It borders on Arthur C. Clarke's [famous adage](https://en.wikipedia.org/wiki/Clarke%27s_three_laws):

> Any sufficiently advanced technology is indistinguishable from magic.

---

## Find resources

At this point, we have the general idea and are probably fairly excited by the implied possibilities or at least the raw power on display. So, as developers we should now search the website for specific resources that would help us to use ml5.js!

Fortunately this is one friendly library so it's well documented and put together. We have a nice set of links on the page's main menu that handle this:

* [Getting Started](https://learn.ml5js.org/)
* [Reference](https://learn.ml5js.org/#/reference/index)
* [Community](https://ml5js.org/community/)

---

## Getting started

This actually takes us to the full documentation of the library, just to a section that's about the very basics of getting set up. It gives us links to external resources like Daniel Schiffman's videos and more.

It gives us the **script tag** we know we'll need to include the library in our own projects, so that's well worth remembering or saving for later.

It shows both a plain JavaScript and a **p5.js specific** example of getting the library running.

---

## Tutorials

In the sidebar when we're looking at the **Getting Started** page we can see some tutorials, including "Introduction to ml5.js". This has a complete example of using ml5.js with p5.js, with code and everything. It could be a good place to start understanding the general structure of working with the library. Of course, here we are in the midst of our **own** tutorial, so we won't go there for now.

---

## API

After the tutorials, the reference does become more complex. It provides the documentation for all the different possibilities within ml5.js. That is, the **API**. The key thing for us is to focus on the actual categories of **machine learning models** that the library provides. Essentially we can treat these as somewhat magical and just **use** them in our projects.

Thus, we can choose particular models/categories of machine learning and investigate those things specifically. If we browse quickly through them, we'll find examples to look at. For example we could look at **Handpose**, notice the animated GIF of the basic idea (it locates your hand) and then scroll down to the examples to try it out live. Looking at the **p5 web editor** examples is a nice way to check things out instantly.

With this in mind, we can check out the other ml5.js models and algorithms, getting an overall sense land before diving into it ourselves.

---

## Community

Finally, the **Community** section of the ml5.js site contains much more sophisticated examples from community members. These are often **seriously** impressive. At least some of these will hopefully have their source code available, though that's not guaranteed. You could also investigate individual developers to look at their other work to find yet more examples of creative code.

---

## Nice to meet you!

So that's a first meeting with ml5.js. We have some idea of what the library does and some idea of what writing code for it might look like. From here we're in a position to dive in and get some of the technical details in place to actually build our own projects with it!

---

# }
