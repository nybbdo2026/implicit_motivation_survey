const brands = [
    { name: "AT&T", img: "img/AT&T.png" },
    { name: "Metro-T-Mobile", img: "img/Metro-T-Mobile.png" }, 
    { name: "T-Mobile", img:"img/T-Mobile.png"}, 
    { name: "US Cellular", img:"img/US Cellular.png"},
    { name: "Verizon", img: "img/Verizon.png"}
  ];

const category = "Telecom"

const attributes = ["spontaneity","discovery","distinct","dynamic","innovative","liberation","pride","recognition","success","sophistication","ambition","status","prosperity","control","practical","simplicity","be practical","expertise","affordability","prudence","security","togetherness","integrity","peace of mind","feel at home","guidance","commitment","pamper","gratification","pleasure","indulgence","optimism","satisfaction","excitement","inspiration","vitality","stimulation","exploration","curiosity","progress","momentum"];

const pretest_attributes = [
  "Hot", 
  "Cold", 
  "Dangerous",
  "Refreshing", 
  "Cute",
  "Soft"
];


const pretest_images = [
  {name: "Cat", img: "pretest_img/pretest_cat.png", correct: ["Cute", "Soft"]},
  {name: "Fire", img:"pretest_img/pretest_fire.png", correct:["Dangerous", "Hot"]}, 
  {name: "Icecube", img: "pretest_img/pretest_icecube.png", correct:["Cold", "Refreshing"]}
]

const pretest_attributes_multiple = ["Hot", "Cold", "Dangerous", "Refreshing", "Cute", "Soft", "Travel", "Excitement", "Precise", "Time", "Deep", "Wet"]

const pretest_images_multiple = [
  {name: "Cat", img: "pretest_img/pretest_cat.png", correct: ["Cute", "Soft"]},
  {name: "Fire", img:"pretest_img/pretest_fire.png", correct:["Dangerous", "Hot"]}, 
  {name: "Icecube", img: "pretest_img/pretest_icecube.png", correct:["Cold", "Refreshing"]}, 
  {name: "Driving", img: "pretest_img/pretest_driving.png", correct:["Travel", "Excitement"]}, 
  {name: "Ocean", img: "pretest_img/pretest_ocean.png", correct:["Deep", "Wet"]},
  {name: "Clock", img: "pretest_img/pretest_clock.png", correct:["Precise", "Time"]}
]


const survey_name = "Telecom Test Survey"