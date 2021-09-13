
var images = 
["group_princesses.jpg",
"ariel.jpg",
"belle.jpg",
 "cindrella.jpg",
 "jasmine.jpg",
 "rapunzel.jpg"];


  var names =["Family book", "Ariel", "Belle", "Cindrella", "Jasmine","Rapunzel"]

 
  var i = 0;
  function update()
  {
      i++;
      var numbers_of_family_member_in_array = 4
      if(1 > numbers_of_family_member_in_array)
{
    i = 0;
}
var updatedimage = images[i];
var updatedname = names[i];
document.getElementById("family_member_images").src = updatedimage;
document.getElementById("family_member_name").innerHTML = updatedname;


  }