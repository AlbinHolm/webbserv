var defaultThreads = [
  {
    id: 1,
    title: "Does dinosaurs still exist?",
    author: "Marcus",
    date: Date.now(),
    content: "Thread content",
    comments: [
      {
        author: "Jack",
        date: Date.now(),
        content:
          "I actually believe they do! How else did we get snow here in the US??",
      },
      {
        author: "Arthur",
        date: Date.now(),
        content: "Are you actually dumb..?",
      },
    ],
  },
  {
    id: 2,
    title: "A little poem i wrote",
    author: "Francis",
    date: Date.now(),
    content: "Thread content 2",
    comments: [
      {
        author: "Francis",
        date: Date.now(),
        content:
          "Once upon a time there was a girl named Lisa, she had a pretty red flower, she ate it!",
      },
      {
        author: "Francis mother",
        date: Date.now(),
        content: "Beautiful! Such talent!",
      },
      {
        author: "Francis",
        date: Date.now(),
        content: "Mom stop youre embarassing me!!!",
      },
      {
        author: "Anonymous",
        date: Date.now(),
        content: "nerd...",
      },
    ],
  },
];

var threads = defaultThreads;
if (localStorage && localStorage.getItem("threads")) {
  threads = JSON.parse(localStorage.getItem("threads")); //gör kommentar för att resetta.
  // localStorage.setItem("threads", JSON.stringify(defaultThreads));
} else {
  threads = defaultThreads;
  localStorage.setItem("threads", JSON.stringify(defaultThreads));
}
