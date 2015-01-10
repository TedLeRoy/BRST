License:
This project is released under the GNU General Public License version 3

Project description:
The Border Router Security Tool (BRST) is a web based utility designed 
to help network administrators secure their Cisco routers.  The administrator 
browses to the web form, answers questions, clicks submit, and receives a 
configuration file that can be cut and pasted into a console session with the 
router.  

Link to sourceforge page:
https://sourceforge.net/projects/borderroutersec/

Link to demo page:
http://borderroutersec.sourceforge.net/

E-mail address:
theodore.leroy@yahoo.com

Release Quality:
As of 9 January, 2015
Corrected nested tables on the faq.html and index.html pages so they now validate.

Shortened the alt wording for Sourceforge at the bottom of all pages.

Clarified look and wording on index.html and help.html pages.

Removed config.html tab from all but the configuration page as it understandably generates an error if not hitting it via the "Submit" button.


As of 6 January, 2015

Corrected error in router_config.php that was causing php not to display. (See Trouble Ticket #2, php not working).

Removed target="_blank" from internal links.

Removed references to "howto.html" and corrected them to read "index.html" (Start Here page).

As of 28 December, 2014

HTML has been completely revised and is now HTML 5 and CSS compliant.
All pages have pass validation at http://validator.w3.org/check and
CSS has passed validation at http://jigsaw.w3.org/css-validator/validator.

Goals of the revision were to modernize the code and make the site 
more usable and user friendly. 

Also, updated the bogon list, and integrated the crypto_key.html, 
troubleshooting.html, and warnings.html into the help.html and 
starthere.html pages.

Fixed typo in Section 4b (access list was created with name "internet_in" 
but applied with name "inet_in". Changed all to "inet_in" in 
router_config.php (thanks for pointing it out Brian!).

Created a normal.html and advanced.html page so users can choose a 
simplified version without all the check boxes or advanced for 
granularity.

As of 11 February, 2010

This utility has been tested on several software versions on Cisco 1600, 1700,
 and 1800 series routers.  It should result in real-world usable configuration 
files but the administrator should keep an eye out for errors and record 
the ssh session for later use if troubleshooting is needed.  

Save a backup copy of your configuration and be ready to go back to it 
quickly if needed.  Use extreme caution on production routers and schedule 
downtime for implementing the changes and testing.