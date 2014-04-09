Top left image can be found in <b>"newsletterTopImage.psd"</b> file. After making changes please save it to /Pictures/ as ida_top_image_left_332x164.png
<br><br>
All the text for the stories is in text.html file.
The div id values must mach the following:
Start is "v-text-item-" and the number is taken form the  data-text-id field specified in the index.html file.

<br>
Example of news item thingy:
<pre>
&lt;div id="v-news-item-6" class="v-news-items" data-text-id="6"&gt; 
   &lt;div class="v-news-items-name"&gt;
       NAME OF THE NEWS ITEM GOES HERE
   &lt;/div&gt;
   &lt;div class="v-news-items-text"&gt;  
       SHORT EXPLANATION GOES HERE (this div can be removed if needed)
   &lt;/div&gt;
&lt;/div&gt;
</pre>
<br>
Example of news text:<br>
<i>* The URL's need to be in proper htlm format (using a href stuff, see example below)</i><br>
<i>* All the paragraphs have to be in p tags</i>
<br>

<pre>
&lt;div id="v-text-item-6"&gt;
        &lt;h2&gt;First Ida Quick Tool is Effective for Patient and Practitioner
        &lt;/h2&gt;
        &lt;p&gt;
            In early summer, the Ida Institute launched the Living Well Quick Tool. Based on the popular Living Well tool, the new "quick" version is contained on a single sheet, so it is easy to print and give to patients in the waiting room.  
        &lt;/p&gt;
        &lt;p&gt;The Living Well Quick Tool is a fast and effective way to open a conversation with patients and learn more about communication situations that are important to them.  The new quick tool can also be sent via email to patients before their consultation. Patients can easily complete the one-page work sheet at home, and come ready to discuss their answers at their appointment.  &lt;/p&gt;
        &lt;p&gt;Download the new tool &lt;a href="http://idainstitute.com/tool_room/living_well/#/tool_room/living_well/quick_tool_version/?type=1337"&gt;here&lt;/a&gt;.&lt;/p&gt;

&lt;/div&gt;
</pre>

<br>

Inside the Pictures folder are the pictures that are shown in the middle of the screen. They just have to have elementPicture<b>6</b>.png where the nuber indicates the story number (aka  data-text-id).




