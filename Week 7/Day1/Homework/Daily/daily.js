class Video {
  constructor(title, uploader, time) {
    this.title = title;
    this.uploader = uploader;
    this.time = time;
  }
  watch() {
    console.log(`${this.uploader} watched all ${this.time} of ${this.title}`);
  }
}

const Bob = new Video("x-files", "Bob", "week");
const Bill = new Video("Friens", "Bill", "month");

Bob.watch();
Bill.watch();

const watchers = [{title:"x-files",uploader:"Brayan",time:"year"},{title:"x-files",uploader:"Bran",time:"year"},{title:"x-files",uploader:"Sonny",time:"day"},{title:"x-files",uploader:"Tom",time:"2 hours"},{title:"x-files",uploader:"Tim",time:"century"}
]

let video = watchers.map((e)=>{
    return new Video(`${e.title}`,`${e.uploader}`,`${e.time}`) 
}
)

console.log(video);

video.forEach((e)=>{
    e.watch()
})