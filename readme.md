Top left image can be found in "newsletterTopImage.psd" file.

All the text for the stories is in text.html file.
The div id values must mach the following:
Start is "v-text-item-" and the number is taken form the  data-text-id field specified in the index.html file.


Example of news item thingy:
<code>
<div id="v-news-item-6" class="v-news-items" data-text-id="6"> 
   <div class="v-news-items-name">
       NAME OF THE NEWS ITEM GOES HERE
   </div>
   <div class="v-news-items-text">  
       SHORT EXPLANATION GOES HERE (this div can be removed if needed)
   </div>
</div>
</code>

