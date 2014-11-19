SimpleFAQ
================
SimpleFAQ Anchor Compiler using jQuery

<h4>About</h4>
The SimpleFAQ plugin takes a set of containers and creates a simple anchor list anywhere on the page for easy navigation within an FAQ page. Getting away from collapsible containers and moving towards a more accessible approach to FAQ seems to be more user-friendly.
<h4>Setup</h4>
<h5>Scripts</h5>
Include the Simple FAQ source file. Be sure to also include jQuery.

    <script src="simple_faq.js"></script>

<h5>HTML</h5>
Create the element that will contain the anchor list. The ID of this container is used by Simple FAQ.

    <div id="faq-container"></div>

Create the elements that Simple FAQ will loop through. Simple FAQ uses the class of the container element and any selector within this container to pull the title from.

    <div class="faq">
      <h4>Question Title</h4>
      <p>Question information</p>
    </div>

<h5>jQuery</h5>
Initialize Simple FAQ.

    simple_faq("#faq-container", ".faq", "faq", "h4");

The third argument (anchor_name) is what you want your anchors to be prefaced with. With "faq", it will be "faq-0", "faq-1", ..., "faq-n".
<h4>Final Thoughts</h4>
It is not super complex or fancy, but it does the job.
