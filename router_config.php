<!doctype html>

<html lang="en-US">

<head>

	<title>Secure Configuration File - BRST - Border Router Security Tool</title>
	<link rel="stylesheet" href="css/brst-style.css" />
	<!--[if lt IE 9]> 
		<script src="js/html5shiv-printshiv.js"> </script> 
	<![endif]--> 
	<meta charset="utf-8" />
	<meta http-equiv="Content-type" content="text/html; charset=utf-8" />
	<meta name="viewport" content="width=device-width, initial-scale=1" />

</head>

<body>

	<div class="container">

		<p class="version">Version 2.0.2</p>
	
		<div class="topmenu">
		
			<ul>
		
				<li><a href="index.html">Start Here</a></li>
				<li><a href="normal.html">Normal</a></li>
				<li><a href="advanced.html">Advanced</a></li>
				<li id="current"><a href="config.html">Config File</a></li>
				<li><a href="help.html">Help</a></li>
				<li><a href="faq.html">FAQ</a></li>
				<li><a href="about.html">About</a></li>
				<li><a href="copying.html">Copying</a></li>

			</ul>

		</div>

		<div class="logo">
		
			<img src="images/brst-logo-big.png">
		
		</div>
		
		<h1>Secure Configuration File - Border Router Security Tool (BRST)</h1>

		<p class="catch-phrase">"Securing the Internet one router at a time."</p>

		<p>The section below represents the secure configuration file which you can paste into your router.</p>

		<main>
		
		<h2>! Border Router Security Tool (BRST) Recommended Configuration</h2>

		<h2>! Start Copying Config File Here !</h2>

		! Enter the following router commands exactly as shown.<br />
		!<br />
		! You may copy and paste directly from the results that appear into <br />
		! the router configuration using your terminal emulation software.<br />
		!<br />
		! Comments are preceded by an !.  They will be ignored by the router.<br />
		!<br />
		!<br />
		! global router commands<br />
		!<br />
		<b>! Watch for WARNINGS in the Configuration the BRST provides.</b><br />
		<b>! If you see a WARNING, read the warning, click your Browser's <br />
		   ! back button, correct the error, and click "Submit" again.</b><br />
		!<br />
		! Entering Global Configuration mode.<br />
		!<br />
		configure terminal<br />
		!<br />
		ip subnet-zero<br />
		ip classless<br />
		!<br />

		<?php

		//Sanity Checks (Rough parse of input to make sure something is entered and it is approximately what it should be)
		//Make sure Code Version is not blank
		if ( ( $_POST["ver_major_release"] == "" ) || ( $_POST["ver_maint_release"] == "" ) || ( $_POST["ver_maint_revision"] == "" ) ) {

		echo "<h1>!WARNING!</h1>";
		echo "<h2>! You did not properly enter a code version.</h2><br />";
		echo "<h2>! The brst needs the code version to generate a configuration file.</h2><br />";
		echo "<b>! Please return to the brst main page and enter the code version.</b><br />";
		echo "<b>! You can obtain the code version by typing the show version command at the enable prompt.</b><br />";

		}

		//Make sure Code Version is greater than 11
		elseif ( $_POST["ver_major_release"] < "11" ) {

		echo "<h1>!WARNING!</h1>";
		echo "<h2>! Your code is too old.</h2><br />";
		echo "<h2>! The brst needs a code version newer than 11 to generate a valid configuration file.</h2><br />";
		echo "<b>! Please obtain a newer code version by purchasing a newer router or code version.</b><br />";

		}

		//Make sure a Router Model is entered
		elseif ( $_POST["hardware_version"] == "" ){

		echo "<h1>!WARNING!</h1>";
		echo "<h2>! You did not enter the model of your router.</h2>";
		echo "<b>! Please use your broswer's back button and enter a router model.</b>";

		}

		//Make sure Gateway IP ! Null
		elseif  ( ( $_POST["gw_ip1"] == "" ) || ( $_POST["gw_ip2"] == "") || ( $_POST["gw_ip3"] == "") || ( $_POST["gw_ip4"] == "") ){

		echo "<h1>!WARNING!</h1>";
		echo "<h2>! An Octet of the Gateway IP Address is blank</h2>";
		echo "<b>! Please use your browser's back button and enter a valid Gateway IP Address.</b>";

		}

		//Make sure each octet of Gateway IP is between 0 and 255
		elseif ( ( ( $_POST["gw_ip1"] < "0" ) || ( $_POST["gw_ip1"] > "255" ) ) || ( ( $_POST["gw_ip2"] < "0" ) || ( $_POST["gw_ip2"] > "255" ) ) || ( ( $_POST["gw_ip3"] < "0" ) || ( $_POST["gw_ip3"] > "255" ) ) || ( ( $_POST["gw_ip4"] < "0" ) || ( $_POST["gw_ip4"] > "255" ) ) ){

		echo "<h1>!WARNING!</h1>";
		echo "<h2>! An Octet of the Gateway IP Address is not between 0 and 255</h2>";
		echo "<b>! Please use your browser's back button and enter a valid Gateway IP Address.</b>";

		}

		//Make sure Internet interface name ! Null
		elseif ( $_POST["wan_int"] == "" ){

		echo "<h1>!WARNING!</h1>";
		echo "<h2>! The Internet Interface name is blank</h2>";
		echo "<b>! Please use your browser's back button and enter an Internet Interface name.</b>";

		}

		//Make sure Internet IP ! Null
		elseif  ( ( $_POST["wan_int_ip1"] == "" ) || ( $_POST["wan_int_ip2"] == "") || ( $_POST["wan_int_ip3"] == "") || ( $_POST["wan_int_ip4"] == "") ){

		echo "<h1>!WARNING!</h1>";
		echo "<h2>! An Octet of the Internet IP Address is blank</h2>";
		echo "<b>! Please use your browser's back button and enter a valid Internet IP Address.</b>";

		}

		//Make sure each octet of Internet IP is between 0 and 255
		elseif ( ( ( $_POST["wan_int_ip1"] < "0" ) || ( $_POST["wan_int_ip1"] > "255" ) ) || ( ( $_POST["wan_int_ip2"] < "0" ) || ( $_POST["wan_int_ip2"] > "255" ) ) || ( ( $_POST["wan_int_ip3"] < "0" ) || ( $_POST["wan_int_ip3"] > "255" ) ) || ( ( $_POST["wan_int_ip4"] < "0" ) || ( $_POST["wan_int_ip4"] > "255" ) ) ){

		echo "<h1>!WARNING!</h1>";
		echo "<h2>! An Octet of the Internet IP Address is not between 0 and 255</h2>";
		echo "<b>! Please use your browser's back button and enter a valid Internet IP Address.</b>";

		}

		//Make sure Internet Mask ! Null
		elseif  ( ( $_POST["wan_int_mask1"] == "" ) || ( $_POST["wan_int_mask2"] == "") || ( $_POST["wan_int_mask3"] == "") || ( $_POST["wan_int_mask4"] == "") ){

		echo "<h1>!WARNING!</h1>";
		echo "<h2>! An Octet of the Internet Mask is blank</h2>";
		echo "<b>! Please use your browser's back button and enter a valid Internet Internet Mask Address.</b>";

		}

		//Make sure each octet of Internet Mask is between 0 and 255
		elseif ( ( ( $_POST["wan_int_mask1"] < "0" ) || ( $_POST["wan_int_mask1"] > "255" ) ) || ( ( $_POST["wan_int_mask2"] < "0" ) || ( $_POST["wan_int_mask2"] > "255" ) ) || ( ( $_POST["wan_int_mask3"] < "0" ) || ( $_POST["wan_int_mask3"] > "255" ) ) || ( ( $_POST["wan_int_mask4"] < "0" ) || ( $_POST["wan_int_mask4"] > "255" ) ) ){

		echo "<h1>!WARNING!</h1>";
		echo "<h2>! An Octet of the Internet Mask Address is not between 0 and 255</h2>";
		echo "<b>! Please use your browser's back button and enter a valid Internet Interface Mask Address.</b>";

		}

		//Make sure Firewall interface name ! Null
		elseif ( $_POST["firewall_int"] == "" ){

		echo "<h1>!WARNING!</h1>";
		echo "<h2>! The Firewall Interface name is blank</h2>";
		echo "<b>! Please use your browser's back button and enter an Firewall Interface name.</b>";

		}

		//Make sure Firewall IP ! Null
		elseif  ( ( $_POST["firewall_int_ip1"] == "" ) || ( $_POST["firewall_int_ip2"] == "") || ( $_POST["firewall_int_ip3"] == "") || ( $_POST["firewall_int_ip4"] == "") ){

		echo "<h1>!WARNING!</h1>";
		echo "<h2>! An Octet of the Firewall IP Address is blank</h2>";
		echo "<b>! Please use your browser's back button and enter a valid Firewall IP Address.</b>";

		}

		//Make sure each octet of Firewall IP is between 0 and 255
		elseif ( ( ( $_POST["firewall_int_ip1"] < "0" ) || ( $_POST["firewall_int_ip1"] > "255" ) ) || ( ( $_POST["firewall_int_ip2"] < "0" ) || ( $_POST["firewall_int_ip2"] > "255" ) ) || ( ( $_POST["firewall_int_ip3"] < "0" ) || ( $_POST["firewall_int_ip3"] > "255" ) ) || ( ( $_POST["firewall_int_ip4"] < "0" ) || ( $_POST["firewall_int_ip4"] > "255" ) ) ){

		echo "<h1>!WARNING!</h1>";
		echo "<h2>! An Octet of the Firewall IP Address is not between 0 and 255</h2>";
		echo "<b>! Please use your browser's back button and enter a valid Firewall IP Address.</b>";

		}

		//Make sure Firewall Mask ! Null
		elseif  ( ( $_POST["firewall_int_mask1"] == "" ) || ( $_POST["firewall_int_mask2"] == "") || ( $_POST["firewall_int_mask3"] == "") || ( $_POST["firewall_int_mask4"] == "") ){

		echo "<h1>!WARNING!</h1>";
		echo "<h2>! An Octet of the Firewall Mask is blank</h2>";
		echo "<b>! Please use your browser's back button and enter a valid Firewall Interface Mask Address.</b>";

		}

		//Make sure each octet of Firewall Mask is between 0 and 255
		elseif ( ( ( $_POST["firewall_int_mask1"] < "0" ) || ( $_POST["firewall_int_mask1"] > "255" ) ) || ( ( $_POST["firewall_int_mask2"] < "0" ) || ( $_POST["firewall_int_mask2"] > "255" ) ) || ( ( $_POST["firewall_int_mask3"] < "0" ) || ( $_POST["firewall_int_mask3"] > "255" ) ) || ( ( $_POST["firewall_int_mask4"] < "0" ) || ( $_POST["firewall_int_mask4"] > "255" ) ) ){

		echo "<h1>!WARNING!</h1>";
		echo "<h2>! An Octet of the Firewall Mask Address is not between 0 and 255</h2>";
		echo "<b>! Please use your browser's back button and enter a valid Firewall Interface Mask Address.</b>";

		}

		//Make sure Enable Secret Password is not Null
		elseif ( $_POST["enable_secret_pw"] == "" ){

		echo "<h1>!WARNING!</h1>";
		echo "<h2>! The Enable Secret Password is blank</h2>";
		echo "<b>! Please use your browser's back button and enter an Enable Secret Password.</b>";

		}

		//Make sure the Username is not Null
		elseif ( $_POST["username"] == "" ){

		echo "<h1>!WARNING!</h1>";
		echo "<h2>! The Username is blank</h2>";
		echo "<b>! Please use your browser's back button and enter a Username.</b>";

		}

		//Make sure the User Password is not Null
		elseif ( $_POST["u_password"] == "" ){

		echo "<h1>!WARNING!</h1>";
		echo "<h2>! The User Password is blank</h2>";
		echo "<b>! Please use your browser's back button and enter a User Password.</b>";

		}

		//Make sure Trusted IP ! Null
		elseif  ( ( $_POST["vty_trusted_ip1"] == "" ) || ( $_POST["vty_trusted_ip2"] == "") || ( $_POST["vty_trusted_ip3"] == "") || ( $_POST["vty_trusted_ip4"] == "") ){

		echo "<h1>!WARNING!</h1>";
		echo "<h2>! An Octet of the Trusted IP Address is blank</h2>";
		echo "<b>! Please use your browser's back button and enter a valid Trusted IP Address.</b><br />";
		echo "<b>! If you will only connect from your Local Area Network, you can use the Firewall's Outside IP Address.</b>";

		}

		//Make sure each octet of Trusted IP is between 0 and 255
		elseif ( ( ( $_POST["vty_trusted_ip1"] < "0" ) || ( $_POST["vty_trusted_ip1"] > "255" ) ) || ( ( $_POST["vty_trusted_ip2"] < "0" ) || ( $_POST["vty_trusted_ip2"] > "255" ) ) || ( ( $_POST["vty_trusted_ip3"] < "0" ) || ( $_POST["vty_trusted_ip3"] > "255" ) ) || ( ( $_POST["vty_trusted_ip4"] < "0" ) || ( $_POST["vty_trusted_ip4"] > "255" ) ) ){

		echo "<h1>!WARNING!</h1>";
		echo "<h2>! An Octet of the Trusted IP Address is not between 0 and 255</h2>";
		echo "<b>! Please use your browser's back button and enter a valid Trusted IP Address.</b><br />";
		echo "<b>! If you will only connect from your Local Area Network, you can use the Firewall's Outside IP Address.</b>";

		}

		else {

			//If all sanity checks pass, create configuration file based on input.
			echo "<b>! default route</b><br />";
			echo "ip route 0.0.0.0 0.0.0.0 " . $_POST["gw_ip1"] . "." . $_POST["gw_ip2"] . "." . $_POST["gw_ip3"] . "." . $_POST["gw_ip4"] . "<br/>";
			echo "!<br />";

			echo "<b>!Section 1: Unneeded Services</b><br />";
			echo "!<br />";

			echo "<b>!Section 1a: Unneeded Global Services</b><br />";
			echo "!<br />";

			if (( $_POST["normal"] == "yes" ) || ( $_POST["checkbox_boot"] == "checked" )) {

			echo "no boot network<br />";

			}

			if ((  $_POST["normal"] == "yes"   ) || (  $_POST["checkbox_cdp"] == "checked" )) {

			echo "no cdp run<br />";

			}

			if ((  $_POST["normal"] == "yes"   ) || (  $_POST["checkbox_svc"] == "checked" )) {

			echo "no service config<br />";

			}

			if ((  $_POST["normal"] == "yes"   ) || (  $_POST["checkbox_dhcp"] == "checked" )) {

			echo "no service dhcp<br />";

			}

			if ((  $_POST["normal"] == "yes"   ) || (  $_POST["checkbox_pad"] == "checked" )) {

			echo "no service pad<br />";

			}

			if ((  $_POST["normal"] == "yes"   ) || (  $_POST["checkbox_finger"] == "checked" )) {

			echo "no ip finger<br />";

			}

			if ((  $_POST["normal"] == "yes"   ) || (  $_POST["checkbox_grat_arps"] == "checked" )) {

			echo "no ip gratuitous-arps<br />";

			}

			if (( $_POST["normal"] == "yes"   ) || (  $_POST["checkbox_http"] == "checked" ))  {

			echo "no ip http server<br />";

			}

			if (( (  $_POST["normal"] == "yes"   ) || (  $_POST["checkbox_http_sec"] == "checked" )) && ( $_POST["radio_encryption"] == "yes" )){

			echo "no ip http secure-server<br />";

			}

			if ((  $_POST["normal"] == "yes"   ) || (  $_POST["checkbox_name_srv"] == "checked" )) {

			echo "no ip name-server<br />";

			}

			if ((  $_POST["normal"] == "yes"   ) || (  $_POST["checkbox_src_rt"] == "checked" )) {

			echo "no ip source-route<br />";

			}

			if ((  $_POST["normal"] == "yes"   ) || (  $_POST["checkbox_lldp"] == "checked" )) {

			echo "no lldp run<br />";

			}

			if ((  $_POST["normal"] == "yes"   ) || (  $_POST["checkbox_tcp_ss"] == "checked" )) {

			echo "no service tcp-small-servers<br />";

			}

			if ((  $_POST["normal"] == "yes"   ) || (  $_POST["checkbox_udp_ss"] == "checked" )) {

			echo "no service udp-small-servers<br />";

			}

			if ((  $_POST["normal"] == "yes"   ) || (  $_POST["checkbox_ip_options"] == "checked" )) {

			echo "ip options drop<br />";

			}

			echo "!<br />";

			echo "<b>!Section 1b: Unneeded Interface Services</b><br />";
			echo "!<br />";

			echo "<b>!Section 1b1: Internet Interface Services</b><br />";
			echo "!<br />";

			echo "interface " . $_POST["wan_int"] . "<br />";
			echo "ip address " . $_POST["wan_int_ip1"] . "." . $_POST["wan_int_ip2"] . "." . $_POST["wan_int_ip3"] . "." . $_POST["wan_int_ip4"] . "
			 " . $_POST["wan_int_mask1"] . "." . $_POST["wan_int_mask2"] . "." . $_POST["wan_int_mask3"] . "." . $_POST["wan_int_mask4"] . "<br />";

			if (( $_POST["normal"] == "yes"   ) || (  $_POST["checkbox_wan_cdp_ena"] == "checked" )) {

			echo "no cdp enable<br />";

			}

			if ((  $_POST["normal"] == "yes"   ) || (  $_POST["checkbox_wan_ip_bcast"] == "checked" )) {

			echo "no ip directed-broadcast<br />";

			}

			if ((  $_POST["normal"] == "yes"   ) || (  $_POST["checkbox_wan_redirects"] == "checked" )) {

			echo "no ip redirect<br />";

			}

			if ((  $_POST["normal"] == "yes"   ) || (  $_POST["checkbox_wan_proxy_arp"] == "checked" )) {

			echo "no ip proxy-arp<br />";

			}

			if ((  $_POST["normal"] == "yes"   ) || (  $_POST["checkbox_wan_mask_reply"] == "checked" )) {

			echo "no ip mask-reply<br />";

			}

			if ((  $_POST["normal"] == "yes"   ) || (  $_POST["checkbox_wan_unreachables"] == "checked" )) {

			echo "no ip unreachables<br />";

			}

			if ((  $_POST["normal"] == "yes"   ) || (  $_POST["checkbox_wan_mop"] == "checked" )) {

			echo "no mop enabled<br />";

			}

			if ((  $_POST["normal"] == "yes"   ) || (  $_POST["checkbox_wan_ntp"] == "checked" )) {

				//Check for router models that only support Simple Network Time Protocol (sntp).
				if (($_POST["hardware_version"] >= "1600") && ($_POST["hardware_version"]<= "1699")
				|| ($_POST["hardware_version"] >= "1003") && ($_POST["hardware_version"]<= "1005")
				|| ($_POST["hardware_version"] >= "1720") && ($_POST["hardware_version"]<= "1729")
				|| ($_POST["hardware_version"] >= "1750") && ($_POST["hardware_version"]<= "1759") )
				{

				echo "!<br />";

				//For all other models disable ntp
				}else{

				echo "ntp disable<br />";

				}

			}

			echo "no shutdown<br />";
			echo "exit<br />";
			echo "!<br />";

			echo "<b>!Section 1b2: Firewall Facing Interface Services</b><br />";
			echo "!<br />";

			echo "interface " . $_POST["firewall_int"] . "<br />";
			echo "ip address " . $_POST["firewall_int_ip1"] . "." . $_POST["firewall_int_ip2"] . "." . $_POST["firewall_int_ip3"] . "." . $_POST["firewall_int_ip4"] . "
			 " . $_POST["firewall_int_mask1"] . "." . $_POST["firewall_int_mask2"] . "." . $_POST["firewall_int_mask3"] . "." . $_POST["firewall_int_mask4"] . "<br />";

			if ((  $_POST["normal"] == "yes"   ) || (  $_POST["checkbox_fw_cdp_ena"] == "checked" )) {

			echo "no cdp enable<br />";

			}

			if ((  $_POST["normal"] == "yes"   ) || (  $_POST["checkbox_fw_ip_bcast"] == "checked" )) {

			echo "no ip directed-broadcast<br />";

			}

			if ((  $_POST["normal"] == "yes"   ) || (  $_POST["checkbox_fw_redirects"] == "checked" )) {

			echo "no ip redirect<br />";

			}

			if ((  $_POST["normal"] == "yes"   ) || (  $_POST["checkbox_fw_proxy_arp"] == "checked" )) {

			echo "no ip proxy-arp<br />";

			}

			if ((  $_POST["normal"] == "yes"   ) || (  $_POST["checkbox_fw_mask_reply"] == "checked" )) {

			echo "no ip mask-reply<br />";

			}

			if ((  $_POST["normal"] == "yes"   ) || (  $_POST["checkbox_fw_unreachables"] == "checked" )) {

			echo "no ip unreachables<br />";

			}

			if ((  $_POST["normal"] == "yes"   ) || (  $_POST["checkbox_fw_mop"] == "checked" )) {

			echo "no mop enabled<br />";

			}

			if ((  $_POST["normal"] == "yes"   ) || (  $_POST["checkbox_fw_ntp"] == "checked" )) {

				//Check for router models that only do Simple Network Time Protocol (sntp).
				if (($_POST["hardware_version"] >= "1600") && ($_POST["hardware_version"]<= "1699")
				|| ($_POST["hardware_version"] >= "1003") && ($_POST["hardware_version"]<= "1005")
				|| ($_POST["hardware_version"] >= "1720") && ($_POST["hardware_version"]<= "1729")
				|| ($_POST["hardware_version"] >= "1750") && ($_POST["hardware_version"]<= "1759") )
				{

				echo "!<br />";

				//For all other models disable ntp
				}else{

				echo "ntp disable<br />";

				}

			}

			echo "no shutdown<br />";
			echo "exit<br />";
			echo "!<br />";

			echo "<b>!Section 2: Recommended Services</b><br />";
			echo "!<br />";

			echo "<b>!Section 2a: Recommended Global Services</b><br />";
			echo "!<br />";

			if ((  $_POST["normal"] == "yes"   ) || (  $_POST["checkbox_cef"] == "checked" )) {

			echo "ip cef<br />";

			}

			if ((  $_POST["normal"] == "yes"   ) || (  $_POST["checkbox_tcp_keepalives_in"] == "checked" )) {

			echo "service tcp-keepalives-in<br />";

			}

			if ((  $_POST["normal"] == "yes"   ) || (  $_POST["checkbox_tcp_keepalives_out"] == "checked" )) {

			echo "service tcp-keepalives-out<br />";

			}

			if ((  $_POST["normal"] == "yes"   ) || (  $_POST["checkbox_pw_encryption"] == "checked" )) {

			echo "service password-encryption<br />";

			}

			if ((  $_POST["normal"] == "yes"   ) || (  $_POST["checkbox_subnet_zero"] == "checked" )) {

			echo "ip subnet-zero<br />";

			}

			if ((  $_POST["normal"] == "yes"   ) || (  $_POST["checkbox_ip_classless"] == "checked" )) {

			echo "ip classless<br />";

			}


			echo "!<br />";

			echo "<b>!Section 2c: Loopback Interface</b><br />";
			echo "!<br />";

			if ((  $_POST["normal"] == "yes"   ) || ($_POST["checkbox_loopback"] == "checked" )) {

				//Make sure Loopback IP ! Null
				if  ( ( $_POST["loopback_ip1"] == "" ) || ( $_POST["loopback_ip2"] == "") || ( $_POST["loopback_ip3"] == "") || ( $_POST["loopback_ip4"] == "") ){

				echo "<h1>!WARNING!</h1>";
				echo "<h2>! An Octet of the Loopback IP Address is blank</h2>";
				echo "<b>! You checked the box saying you want to configure a Loopback Interface.</b><br />";
				echo "<b>! Please use your browser's back button and enter a valid Loopback IP Address.</b>";

				}

				//Make sure each octet of Loopback IP is between 0 and 255
				elseif ( ( ( $_POST["loopback_ip1"] < "0" ) || ( $_POST["loopback_ip1"] > "255" ) ) || ( ( $_POST["loopback_ip2"] < "0" ) || ( $_POST["loopback_ip2"] > "255" ) ) || ( ( $_POST["loopback_ip3"] < "0" ) || ( $_POST["loopback_ip3"] > "255" ) ) || ( ( $_POST["loopback_ip4"] < "0" ) || ( $_POST["loopback_ip4"] > "255" ) ) ){

				echo "<h1>!WARNING!</h1>";
				echo "<h2>! An Octet of the Loopback IP Address is not between 0 and 255</h2>";
				echo "<b>! You checked the box saying you want to configure a Loopback Interface.</b><br />";
				echo "<b>! Please use your browser's back button and enter a valid Loopback IP Address.</b>";

				}else{

				echo "interface loopback 0<br />";
				echo "ip address " . $_POST["loopback_ip1"] . "." . $_POST["loopback_ip2"] . "." . $_POST["loopback_ip3"] . "." . $_POST["loopback_ip4"] . " 255.255.255.255<br />";
				echo "no cdp enable<br />";
				echo "no ip directed-broadcast<br />";
				echo "no ip redirect<br />";
				echo "no ip proxy-arp<br />";
				echo "no ip mask-reply<br />";
				echo "no ip unreachables<br />";
				echo "no mop enabled<br />";
				echo "no shutdown<br />";
				echo "exit<br />";
				echo "!<br />";

				}

			}

			echo "<b>!Section 2d: Null Interface</b><br />";
			echo "!<br />";

			if ((  $_POST["normal"] == "yes"   ) || ($_POST["checkbox_null"] == "checked" )) {
			echo "interface null 0<br />";
			echo "no ip unreachables<br />";
			echo "exit<br />";
			echo "!<br />";

			}

			echo "<b>!Section 2e: Configure Network Time Protocol</b><br />";
			echo "!<br />";

			if ((  $_POST["normal"] == "yes"   ) || ($_POST["checkbox_ntp_config"] == "checked" )) {

				//Make sure NTP Server 1's IPs are ! Null
				if  ( ( $_POST["ntp_svr1_ip1"] == "" ) || ( $_POST["ntp_svr1_ip2"] == "") || ( $_POST["ntp_svr1_ip3"] == "") || ( $_POST["ntp_svr1_ip4"] == "") ){

				echo "<h1>!WARNING!</h1>";
				echo "<h2>! An Octet of the Primary NTP Server's IP Address is blank</h2>";
				echo "<b>! Please use your browser's back button and enter a valid Primary NTP Server IP Address.</b><br />";

				}

				//Make sure each octet of NTP Server 1's IPs are between 0 and 255
				if ( ( ( $_POST["ntp_svr1_ip1"] < "0" ) || ( $_POST["ntp_svr1_ip1"] > "255" ) ) || ( ( $_POST["ntp_svr1_ip2"] < "0" ) || ( $_POST["ntp_svr1_ip2"] > "255" ) ) || ( ( $_POST["ntp_svr1_ip3"] < "0" ) || ( $_POST["ntp_svr1_ip3"] > "255" ) ) || ( ( $_POST["ntp_svr1_ip4"] < "0" ) || ( $_POST["ntp_svr1_ip4"] > "255" ) ) ){

				echo "<h1>!WARNING!</h1>";
				echo "<h2>! An Octet of the Primary NTP Server's IP Address is not between 0 and 255</h2>";
				echo "<b>! Please use your browser's back button and enter a valid Primary NTP Server IP Address.</b><br />";

				}

				//Check for router models that only do Simple Network Time Protocol (sntp).
				elseif (($_POST["hardware_version"] >= "1600") && ($_POST["hardware_version"]<= "1699")
				|| ($_POST["hardware_version"] >= "1003") && ($_POST["hardware_version"]<= "1005")
				|| ($_POST["hardware_version"] >= "1720") && ($_POST["hardware_version"]<= "1729")
				|| ($_POST["hardware_version"] >= "1750") && ($_POST["hardware_version"]<= "1759") )
				{

					//If NTP Server IPs are present and IPs are between 0 and 255, configure NTP or SNTP as applicable.
					echo "sntp server " . $_POST["ntp_svr1_ip1"] . "." . $_POST["ntp_svr1_ip2"] . "." . $_POST["ntp_svr1_ip3"] . "." . $_POST["ntp_svr1_ip4"] . "<br />";
					echo "!Your hardware supports only Simple Network Time Protocol (SNTP)<br />";
					echo "!SNTP does not support multiple servers.  Only one server will be configured. <br />";
					echo "!<br />";

					}

				//For all other models, use Network Time Protocol (ntp).
				else{

					//If loopback is configured, use it as ntp source
					if ((  $_POST["normal"] == "yes"   ) || ( $_POST["checkbox_loopback"] == "checked" )){

					echo "ntp source loopback 0<br />";

					}

				//Make sure NTP Server 2's IPs are ! Null
				if  ( ( $_POST["ntp_svr2_ip1"] == "" ) || ( $_POST["ntp_svr2_ip2"] == "") || ( $_POST["ntp_svr2_ip3"] == "") || ( $_POST["ntp_svr2_ip4"] == "") ){

				echo "<h1>!WARNING!</h1>";
				echo "<h2>! An Octet of the Secondary NTP Server's IP Address is blank</h2>";
				echo "<b>! Please use your browser's back button and enter a valid Secondary NTP Server IP Address.</b>";

				}

				//Make sure each octet of NTP Server 2's IPs are between 0 and 255
				elseif ( ( ( $_POST["ntp_svr2_ip1"] < "0" ) || ( $_POST["ntp_svr2_ip1"] > "255" ) ) || ( ( $_POST["ntp_svr2_ip2"] < "0" ) || ( $_POST["ntp_svr2_ip2"] > "255" ) ) || ( ( $_POST["ntp_svr2_ip3"] < "0" ) || ( $_POST["ntp_svr2_ip3"] > "255" ) ) || ( ( $_POST["ntp_svr2_ip4"] < "0" ) || ( $_POST["ntp_svr2_ip4"] > "255" ) ) ){

				echo "<h1>!WARNING!</h1>";
				echo "<h2>! An Octet of the Secondary NTP Server's IP Address is not between 0 and 255</h2>";
				echo "<b>! Please use your browser's back button and enter a valid Secondary NTP Server IP Address.</b><br />";

				}else{

					//If NTP Server IPs are present and IPs are between 0 and 255, configure NTP or SNTP as applicable.
					echo "ntp server " . $_POST["ntp_svr1_ip1"] . "." . $_POST["ntp_svr1_ip2"] . "." . $_POST["ntp_svr1_ip3"] . "." . $_POST["ntp_svr1_ip4"] . " source loopback 0 prefer<br />";
					echo "ntp server " . $_POST["ntp_svr2_ip1"] . "." . $_POST["ntp_svr2_ip2"] . "." . $_POST["ntp_svr2_ip3"] . "." . $_POST["ntp_svr2_ip4"] . " source loopback 0<br />";
					echo "no access-list 21<br />";
					echo "access-list 21 permit " . $_POST["ntp_svr1_ip1"] . "." . $_POST["ntp_svr1_ip2"] . "." . $_POST["ntp_svr1_ip3"] . "." . $_POST["ntp_svr1_ip4"] . "<br />";
					echo "access-list 21 permit " . $_POST["ntp_svr2_ip1"] . "." . $_POST["ntp_svr2_ip2"] . "." . $_POST["ntp_svr2_ip3"] . "." . $_POST["ntp_svr2_ip4"] . "<br />";
					echo "access-list 21 deny any log<br />";
					echo "ntp access-group peer 21<br />";
					echo "!<br />";

					}

				}

			}

			echo "<b>!Section 3: Access Control</b><br />";
			echo "!<br />";

			echo "<b>!Section 3a: Enable Secret and Local User Account</b><br />";
			echo "!<br />";

			if  ( ( $_POST["ver_major_release"] >= "12" ) && ( $_POST["ver_maint_release"] >= "2" ) && ( $_POST["ver_maint_revision"] >= "8" )
			    && ( ( $_POST["hardware_version"] < "7600" ) || ( $_POST["hardware_version"] > "7699" ) ) ) {

				echo "username " . $_POST["username"] . " secret " . $_POST["u_password"] . "<br />";
				echo "enable secret " . $_POST["enable_secret_pw"] . "<br />";
				echo "no enable password<br />";
				echo "!<br />";

				}else{

				echo "username " . $_POST["username"] . " password " . $_POST["u_password"] . "<br />";
				echo "enable secret " . $_POST["enable_secret_pw"] . "<br />";
				echo "no enable password<br />";
				echo "!<br />";

			}

			echo "<b>!Section 3b: Auxilliary Port</b><br />";
			echo "!<br />";

			if ((  $_POST["normal"] == "yes"   ) || (  $_POST["checkbox_aux"] == "checked" )) {
			echo "line aux 0<br />";
			echo "no exec<br />";
			echo "login ctrlc-disable<br />";
			echo "no password<br />";
			echo "exec-timeout 0 1<br />";
			echo "transport output none<br />";
			echo "transport input none<br />";
			echo "exit<br />";
			echo "!<br />";

			}else{

			echo "! Disable Aux Port was unchecked<br />";
			echo "! If you have an Aux Port, but do not<br />";
			echo "! need it enabled, check the box<br />";
			echo "! and rerun brst.<br />";
			echo "!<br />";

			}

			echo "<b>!Section 3c: Console Port</b><br />";
			echo "!<br />";

			if ((  $_POST["normal"] == "yes"   ) || (  $_POST["checkbox_console"] == "checked" )) {
			echo "line con 0<br />";
			echo "logging synchronous<br />";
			echo "transport output none<br />";
			echo "exit<br />";
			echo "!<br />";

			}

			echo "<b>!Section 3d: Virtual Terminal (vty) Ports</b><br />";
			echo "!<br />";

			if ((  $_POST["normal"] == "yes"   ) || (  $_POST["checkbox_vty"] == "checked" )) {

				if (( $_POST["radio_encryption"] == "yes" )  &&  (( $_POST["ver_major_release"] >= "12" ) && ( $_POST["ver_maint_release"] >= "2" ) && ( $_POST["ver_maint_revision"] >= "14" )) || ( $_POST["radio_encryption"] == "yes" )  &&  (( $_POST["ver_major_release"] >= "12" ) && ( $_POST["ver_maint_release"] >= "3" ))) {

				echo "no ip access-list extended ssh-remote<br />";
				echo "ip access-list extended ssh-remote<br />";
				echo "permit tcp host " . $_POST["vty_trusted_ip1"] . "." . $_POST["vty_trusted_ip2"] . "." . $_POST["vty_trusted_ip3"] . "." . $_POST["vty_trusted_ip4"] . " host 0.0.0.0 eq 22 log<br />";
				echo "deny ip any any log<br />";
				echo "exit<br />";
				echo "!<br />";
				echo "line vty 0 4<br />";
				echo "access-class ssh-remote in<br />";
				echo "exec-timeout 20 0<br />";
				echo "transport input ssh<br />";
				echo "transport output none<br />";
				echo "exit<br />";
				echo "!<br />";

				}else{

				echo "no ip access-list extended telnet-remote<br />";
				echo "ip access-list extended telnet-remote<br />";
				echo "permit tcp host " . $_POST["vty_trusted_ip1"] . "." . $_POST["vty_trusted_ip2"] . "." . $_POST["vty_trusted_ip3"] . "." . $_POST["vty_trusted_ip4"] . " host 0.0.0.0 eq telnet log<br />";
				echo "deny ip any any log<br />";
				echo "exit<br />";
				echo "!<br />";
				echo "line vty 0 4<br />";
				echo "access-class telnet-remote in<br />";
				echo "exec-timeout 20 0<br />";
				echo "transport input telnet<br />";
				echo "transport output none<br />";
				echo "exit<br />";
				echo "!<br />";
				}

			}


			echo "<b>!Section 3e: Restricting Command Access</b><br />";
			echo "!<br />";

			if ((  $_POST["normal"] == "yes"   ) || (  $_POST["checkbox_cmd_access"] == "checked" )) {
			echo "privilege exec level 15 connect<br />";
			echo "privilege exec level 15 telnet<br />";
			echo "privilege exec level 15 rlogin<br />";
			echo "privilege exec level 15 show ip access-lists<br />";
			echo "privilege exec level 15 show access-lists<br />";
			echo "privilege exec level 15 show logging<br />";

			if (( $_POST["radio_encryption"] == "yes" )  &&  (( $_POST["ver_major_release"] >= "12" ) && ( $_POST["ver_maint_release"] >= "2" ) && ( $_POST["ver_maint_revision"] >= "14" )) || (( $_POST["ver_major_release"] >= "12" ) && ( $_POST["ver_maint_release"] >= "3" ))) {

			echo "privilege exec level 15 ssh<br />";

			}

			echo "privilege exec level 1 show ip<br />";
			echo "!<br />";

			}

			echo "<b>!Section 3f: AAA Access Control</b><br />";
			echo "!<br />";

			if ((  $_POST["normal"] == "yes"   ) || (  $_POST["checkbox_aaa"] == "checked" )) {
			echo "aaa new-model<br />";
			echo "aaa authentication login default local<br />";

			echo "line vty 0 4<br />";
			echo "login authentication default<br />";
			echo "exit<br />";

			echo "line con 0<br />";
			echo "login authentication default<br />";
			echo "exit<br />";
			echo "!<br />";

			}

			echo "<b>!Section 4: Anti-spoofing</b><br />";
			echo "!<br />";

			echo "<b>!Section 4a: Null Routing</b><br />";
			echo "!<br />";

			//Evaluate for use of Private Schemes.  If found, set variables for later use.

			//Look for 10.x.x.x network use on router

			$subnet10_wan = 0;
			$subnet10_fw = 0;
			$subnet172_loopback = 0;
			$subnet10_dmz = 0;
			$subnet10_fw_syslog = 0;
			$subnet10 = 0;

			//Store a variable value for use on interface access lists

			if (  $_POST["wan_int_ip1"] == "10" ){

			$subnet10_wan = 1;

			}

			if (  $_POST["firewall_int_ip1"] == "10" ){

			$subnet10_fw = 1;

			}

			if (  $_POST["loopback_ip1"] == "10" ){

			$subnet10_loopback = 1;

			}

			if (  $_POST["local_dmz_ip1"] == "10" ){

			$subnet10_dmz = 1;

			}

			if (  $_POST["firewall_syslog_ip1"] == "10" ) {

			$subnet10_fw_syslog = 1;

			}

			//If any interface uses a 10.x.x.x network, set variable so it can be removed from null routing.

			if ( ( $subnet10_wan == "1" ) || ( $subnet10_fw == "1" ) || ( $subnet10_loopback == "1" ) || ( $subnet10_dmz == "1" ) || ( $subnet10_fw_syslog == "1" ) ){

			$subnet10 = 1;

			}

			//Look for 172.16.x.x through 172.32.x.x network use on router.

			$subnet172_wan = 0;
			$subnet172_fw = 0;
			$subnet172_loopback = 0;
			$subnet172_dmz = 0;
			$subnet172_fw_syslog = 0;
			$subnet172 = 0;

			if (  $_POST["wan_int_ip1"] == "172" && $_POST["wan_int_ip2"] >= "16" && $_POST["wan_int_ip2"] <= "32" ){

			$subnet172_wan = 1;

			}

			if (  $_POST["firewall_int_ip1"] == "172" && $_POST["firewall_int_ip2"] >= "16" && $_POST["wan_int_ip2"] <= "32" ){

			$subnet172_fw = 1;

			}

			if (  $_POST["loopback_ip1"] == "172" && $_POST["loopback_ip2"] >= "16" && $_POST["wan_int_ip2"] <= "32" ){

			$subnet172_loopback = 1;

			}

			if (  $_POST["local_dmz_ip1"] == "172" && $_POST["local_dmz_ip2"] >= "16" && $_POST["wan_int_ip2"] <= "32" ){

			$subnet172_dmz = 1;

			}

			if (  $_POST["firewall_syslog_ip1"] == "172" && $_POST["firewall_syslog_ip2"] >= "16" && $_POST["wan_int_ip2"] <= "32" ) {

			$subnet172_fw_syslog = 1;

			}

			//If any interface uses a 172.16.x.x through 172.32.x.x network, set variable so it can be reomoved from null routing.

			if ( ( $subnet172_wan == "1" ) || ( $subnet172_fw == "1" ) || ( $subnet172_loopback == "1" ) || ( $subnet172_dmz == "1" ) || ( $subnet172_fw_syslog == "1" ) ){

			$subnet172 = 1;

			}

			//Look for 192.168.x.x network use on router.

			$subnet192_wan = 0;
			$subnet192_fw = 0;
			$subnet192_loopback = 0;
			$subnet192_dmz = 0;
			$subnet192_fw_syslog = 0;
			$subnet192 = 0;

			if (  $_POST["wan_int_ip1"] == "192" && $_POST["wan_int_ip2"] == "168" ){

			$subnet192_wan = 1;

			}

			if (  $_POST["firewall_int_ip1"] == "192" && $_POST["firewall_int_ip2"] == "168"  ){

			$subnet192_fw = 1;

			}

			if (  $_POST["loopback_ip1"] == "192" && $_POST["loopback_ip2"] == "168" ){

			$subnet192_loopback = 1;

			}

			if (  $_POST["local_dmz_ip1"] == "192" && $_POST["local_dmz_ip2"] == "168" ){

			$subnet192_dmz = 1;

			}

			if (  $_POST["firewall_syslog_ip1"] == "192" && $_POST["firewall_syslog_ip2"] == "168" ) {

			$subnet192_fw_syslog = 1;

			}

			//If any interface uses a 192.16.x.x through 192.32.x.x network, set variable so it can be reomoved from null routing.

			if ( ( $subnet192_wan == "1" ) || ( $subnet192_fw == "1" ) || ( $subnet192_loopback == "1" ) || ( $subnet192_dmz == "1" ) || ( $subnet192_fw_syslog == "1" ) ){

			$subnet192 = 1;

			}

			echo "<b>! Null routing for BOGON and Martian Addresses</b><br />";
			echo "<b>! Last updated 1 January 2015</b><br />";
			echo "<b>! For more info and the latest list, see the following web site:</b><br />";
			echo "<b>! https://www.cymru.com/Documents/bogon-list.html</b><br />";
			echo "<br />";

			if ((  $_POST["normal"] == "yes"   ) || (  $_POST["checkbox_null_route"] == "checked" )) {
			echo "ip route 0.0.0.0 255.0.0.0 null0<br />";

			if (  $subnet10 == "1" ){

			echo "! ip route 10.0.0.0 255.255.255.0 null0 removed<br />";
			echo "! because it is in use on this router.<br />";

			}

			else  {

			echo "ip route 10.0.0.0 255.0.0.0 null0<br />";

			}

			echo "ip route 100.0.0.0 255.192.0.0 null0<br />";
			echo "ip route 127.0.0.0 255.0.0.0 null0<br />";
			echo "ip route 169.254.0.0 255.255.0.0 null0<br />";

			if ( $subnet172 == "1" ){

			echo "! ip route 172.16.0.0 255.240.0.0 null0 removed<br />";
			echo "! because it is in use on this router.<br />";

			}
			else  {

			echo "ip route 172.16.0.0 255.240.0.0 null0<br />";

			}

			echo "ip route 192.0.0.0 255.255.255.0 null0<br />";
			echo "ip route 192.0.2.0 255.255.255.0 null0<br />";

			if (  $subnet192 == "1" ){

			echo "! ip route 192.168.0.0 255.255.0.0 null0 removed<br />";
			echo "! because it is in use on this router.<br />";

			}

			else  {

			echo "ip route 192.168.0.0 255.255.0.0 null0<br />";

			}

			echo "ip route 198.18.100.0 255.254.0.0 null0<br />";
			echo "ip route 198.51.100.0 255.255.255.0 null0<br />";
			echo "ip route 203.0.113.0 255.255.255.0 null0<br />";
			echo "ip route 224.0.0.0 224.0.0.0 null0<br />";
			echo "!<br />";

			}

			echo "<b>!Section 4b: Internet Facing (Outside) ACL</b><br />";
			echo "!<br />";

			if ((  $_POST["normal"] == "yes"   ) || (  $_POST["checkbox_outside_acl"] == "checked" )) {
			echo "no ip access-list extended inet_in<br />";
			echo "ip access-list extended inet_in<br />";

			//Make rule to deny 10.x.x.x inbound if it is not in use
			//on this interface but is in use elsewhere on the router.

			if ( $subnet10_wan != "1" && $subnet10 == "1" ){

			echo "deny ip 10.0.0.0 0.255.255.255 any<br />";

			}

			//Make rule to deny 172.16.x.x through 172.32.x.x inbound if it is not in use
			//on this interface but is in use elsewhere on the router.

			if ( $subnet172_wan != "1" && $subnet172 == "1" ){

			echo "deny ip 172.16.0.0 0.15.255.255 any<br />";

			}

			//Make rule to deny 192.168.x.x inbound if it is not in use
			//on this interface but is in use elsewhere on the router.

			if ( $subnet192_wan != "1" && $subnet192 == "1" ){

			echo "deny ip 192.168.0.0 0.0.255.255 any<br />";

			}

			//Create Wildcard Mask for use in ACL
			$fw_mask_1 = 255 - $_POST["firewall_int_mask1"];
			$fw_mask_2 = 255 - $_POST["firewall_int_mask2"];
			$fw_mask_3 = 255 - $_POST["firewall_int_mask3"];
			$fw_mask_4 = 255 - $_POST["firewall_int_mask4"];

			echo "deny ip " . $_POST["firewall_int_ip1"] . "." . $_POST["firewall_int_ip2"] . "." . $_POST["firewall_int_ip3"] . "." . $_POST["firewall_int_ip4"] . "
			$fw_mask_1.$fw_mask_2.$fw_mask_3.$fw_mask_4 any log<br />";
			echo "deny udp any any eq syslog<br />";
			echo "deny icmp any any fragments<br />";
			echo "permit ip any any<br />";
			echo "exit<br />";
			echo "interface " . $_POST["wan_int"] . "<br />";
			echo "ip access-group inet_in in<br />";
			echo "exit<br />";
			echo "!<br />";

			}

			echo "<b>!Section 4c: Firewall Facing (Inside) ACL</b><br />";
			echo "!<br />";

			if ((  $_POST["normal"] == "yes"   ) || (  $_POST["checkbox_inside_acl"] == "checked" )) {

			echo "no ip access-list extended firewall_in<br />";
			echo "ip access-list extended firewall_in<br />";
			echo "permit ip " . $_POST["firewall_int_ip1"] . "." . $_POST["firewall_int_ip2"] . "." . $_POST["firewall_int_ip3"] . "." . $_POST["firewall_int_ip4"] . "
			$fw_mask_1.$fw_mask_2.$fw_mask_3.$fw_mask_4 any log<br />";
			echo "deny ip any any log<br />";
			echo "exit<br />";
			echo "interface " . $_POST["firewall_int"] . "<br />";
			echo "ip access-group firewall_in in<br />";
			echo "exit<br />";
			echo "!<br />";

			}

			echo "<b>!Section 5: Logging</b><br />";
			echo "!<br />";

			if (  $_POST["radio_logging"] == "local_syslog" ) {

				//Make sure Local DMZ IP ! Null
				if  ( ( $_POST["local_dmz_ip1"] == "" ) || ( $_POST["local_dmz_ip2"] == "") || ( $_POST["local_dmz_ip3"] == "") || ( $_POST["local_dmz_ip4"] == "") ){

				echo "<h1>!WARNING!</h1>";
				echo "<h2>! An Octet of the Local DMZ IP Address is blank</h2>";
				echo "<b>! You clicked a radio button saying you want to configure a Local DMZ Interface.</b><br />";
				echo "<b>! Please use your browser's back button and enter a valid Local DMZ IP Address.</b>";

				}

				//Make sure each octet of Local DMZ IP is between 0 and 255
				elseif ( ( ( $_POST["local_dmz_ip1"] < "0" ) || ( $_POST["local_dmz_ip1"] > "255" ) ) || ( ( $_POST["local_dmz_ip2"] < "0" ) || ( $_POST["local_dmz_ip2"] > "255" ) ) || ( ( $_POST["local_dmz_ip3"] < "0" ) || ( $_POST["local_dmz_ip3"] > "255" ) ) || ( ( $_POST["local_dmz_ip4"] < "0" ) || ( $_POST["local_dmz_ip4"] > "255" ) ) ){

				echo "<h1>!WARNING!</h1>";
				echo "<h2>! An Octet of the Local DMZ IP Address is not between 0 and 255</h2>";
				echo "<b>! You clicked a radio button saying you want to configure a Local DMZ Interface.</b><br />";
				echo "<b>! Please use your browser's back button and enter a valid Local DMZ IP Address.</b>";

				}

				//Make sure Local DMZ Mask ! Null
				elseif  ( ( $_POST["local_dmz_mask1"] == "" ) || ( $_POST["local_dmz_mask2"] == "") || ( $_POST["local_dmz_mask3"] == "") || ( $_POST["local_dmz_mask4"] == "") ){

				echo "<h1>!WARNING!</h1>";
				echo "<h2>! An Octet of the Local DMZ Mask is blank</h2>";
				echo "<b>! You clicked a radio button saying you want to configure a Local DMZ Interface.</b><br />";
				echo "<b>! Please use your browser's back button and enter a valid Local DMZ Mask.</b>";

				}

				//Make sure each octet of Local DMZ Mask is between 0 and 255
				elseif ( ( ( $_POST["local_dmz_mask1"] < "0" ) || ( $_POST["local_dmz_mask1"] > "255" ) ) || ( ( $_POST["local_dmz_mask2"] < "0" ) || ( $_POST["local_dmz_mask2"] > "255" ) ) || ( ( $_POST["local_dmz_mask3"] < "0" ) || ( $_POST["local_dmz_mask3"] > "255" ) ) || ( ( $_POST["local_dmz_mask4"] < "0" ) || ( $_POST["local_dmz_mask4"] > "255" ) ) ){

				echo "<h1>!WARNING!</h1>";
				echo "<h2>! An Octet of the Local DMZ Mask is not between 0 and 255</h2>";
				echo "<b>! You clicked a radio button saying you want to configure a Local DMZ Interface.</b><br />";
				echo "<b>! Please use your browser's back button and enter a valid Local DMZ Mask.</b>";

				}

				//Make sure Local DMZ Server ! Null
				elseif  ( ( $_POST["local_dmz_syslog_ip1"] == "" ) || ( $_POST["local_dmz_syslog_ip2"] == "") || ( $_POST["local_dmz_syslog_ip3"] == "") || ( $_POST["local_dmz_syslog_ip4"] == "") ){

				echo "<h1>!WARNING!</h1>";
				echo "<h2>! An Octet of the Local DMZ Syslog Server IP is blank</h2>";
				echo "<b>! You clicked a radio button saying you want to configure a Local DMZ Syslog Server.</b><br />";
				echo "<b>! Please use your browser's back button and enter a valid Local DMZ Syslog Server IP Address.</b>";

				}

				//Make sure each octet of Local DMZ Server is between 0 and 255
				elseif ( ( ( $_POST["local_dmz_syslog_ip1"] < "0" ) || ( $_POST["local_dmz_syslog_ip1"] > "255" ) ) || ( ( $_POST["local_dmz_syslog_ip2"] < "0" ) || ( $_POST["local_dmz_syslog_ip2"] > "255" ) ) || ( ( $_POST["local_dmz_syslog_ip3"] < "0" ) || ( $_POST["local_dmz_syslog_ip3"] > "255" ) ) || ( ( $_POST["local_dmz_syslog_ip4"] < "0" ) || ( $_POST["local_dmz_syslog_ip4"] > "255" ) ) ){

				echo "<h1>!WARNING!</h1>";
				echo "<h2>! An Octet of the Local DMZ Syslog Server IP is not between 0 and 255</h2>";
				echo "<b>! You clicked a radio button saying you want to configure a Local DMZ Syslog Server.</b><br />";
				echo "<b>! Please use your browser's back button and enter a valid Local DMZ Syslog Server IP Address.</b>";

				}

				//Make sure Local DMZ Interface Name ! Null
				elseif  ( $_POST["local_dmz_name"] == "" ) {

				echo "<h1>!WARNING!</h1>";
				echo "<h2>! The Local DMZ Interface Name is blank</h2>";
				echo "<b>! You clicked a radio button saying you want to configure a Local DMZ Syslog Server.</b><br />";
				echo "<b>! Please use your browser's back button and enter a valid Local DMZ Interface Name.</b>";

				}else{

					echo "interface " . $_POST["local_dmz_name"] . "<br />";
					echo "ip address " . $_POST["local_dmz_ip1"] . "." . $_POST["local_dmz_ip2"] . "." . $_POST["local_dmz_ip3"] . "." . $_POST["local_dmz_ip4"] . "
					" . $_POST["local_dmz_mask1"] . "." . $_POST["local_dmz_mask2"] . "." . $_POST["local_dmz_mask3"] . "." . $_POST["local_dmz_mask4"] . " <br />";

					echo "no cdp enable<br />";
					echo "no ip directed-broadcast<br />";
					echo "no ip redirect<br />";
					echo "no ip proxy-arp<br />";
					echo "no ip mask-reply<br />";
					echo "no ip unreachables<br />";
					echo "no mop enabled<br />";

						//Check for router models that only do Simple Network Time Protocol (sntp).
						if (($_POST["hardware_version"] >= "1600") && ($_POST["hardware_version"]<= "1699")
						|| ($_POST["hardware_version"] >= "1003") && ($_POST["hardware_version"]<= "1005")
						|| ($_POST["hardware_version"] >= "1720") && ($_POST["hardware_version"]<= "1729")
						|| ($_POST["hardware_version"] >= "1750") && ($_POST["hardware_version"]<= "1759") )
						{

						echo "!<br />";

						//For all other models disablee ntp
						}else{

						echo "ntp disable<br />";

						}

					echo "no shutdown<br />";
					echo "exit<br />";
					echo "!<br />";
					echo "logging host " . $_POST["local_dmz_syslog_ip1"] . "." . $_POST["local_dmz_syslog_ip2"] . "." . $_POST["local_dmz_syslog_ip3"] . "." . $_POST["local_dmz_syslog_ip4"] . "<br />";
					echo "logging trap 6<br />";
					echo "logging source-interface loopback 0<br />";
					echo "logging buffered 6<br />";
					echo "no logging console<br />";
					echo "no logging monitor<br />";
					echo "!<br />";

						//If version is greater than 12.3(4) enable logging of config commands
						if ( ( $_POST["ver_major_release"] >= "12" ) && ( $_POST["ver_maint_release"] >= "3" ) && ( $_POST["ver_maint_revision"] >= "4" ) && ( $_POST["radio_encryption"] == "yes" ) ) {

						echo "archive<br />";
						echo "mkdir flash:/cmd_logs<br />";
						echo "path flash:/cmdlogs <br />";
						echo "log config<br />";
						echo "logging size 200<br />";
						echo "hidekeys<br />";
						echo "notify syslog<br />";
						echo "!<br />";

						}

					echo "ip access-list extended loc-dmz-log-out<br />";
					echo "permit ip " . $_POST["local_dmz_ip1"] . "." . $_POST["local_dmz_ip2"] . "." . $_POST["local_dmz_ip3"] . "." . $_POST["local_dmz_ip4"] . " any eq 514<br />";
					echo "permit tcp host " . $_POST["vty_trusted_ip1"] . "." . $_POST["vty_trusted_ip2"] . "." . $_POST["vty_trusted_ip3"] . "." . $_POST["vty_trusted_ip4"] . " host 0.0.0.0 eq 22 log<br />";
					echo "deny ip any any log<br />";
					echo "exit<br />";
					echo "interface " . $_POST["local_dmz_name"] . "<br />";
					echo "ip access-group loc-dmz-log-out out<br />";
					echo "exit<br />";
					echo "!<br />";
					echo "ip access-list extended loc-dmz-log-in<br />";
					echo "permit ip host " . $_POST["local_dmz_syslog_ip1"] . "." . $_POST["local_dmz_syslog_ip2"] . "." . $_POST["local_dmz_syslog_ip3"] . "." . $_POST["local_dmz_syslog_ip4"] . " any eq 22 log<br />";
					echo "deny ip any any log<br />";
					echo "exit<br />";
					echo "interface " . $_POST["local_dmz_name"] . "<br />";
					echo "ip access-group loc-dmz-log-in in<br />";
					echo "exit<br />";
					echo "!<br />";

					}

			}

			if (  $_POST["radio_logging"] == "dmz_syslog" ) {

				//Make sure Firewall DMZ IP ! Null
				if  ( ( $_POST["firewall_syslog_ip1"] == "" ) || ( $_POST["firewall_syslog_ip2"] == "") || ( $_POST["firewall_syslog_ip3"] == "") || ( $_POST["firewall_syslog_ip4"] == "") ){

				echo "<h1>!WARNING!</h1>";
				echo "<h2>! An Octet of the Firewall DMZ Syslog IP Address is blank</h2>";
				echo "<b>! You clicked a radio button saying you want to configure a Firewall DMZ Syslog Server.</b><br />";
				echo "<b>! Please use your browser's back button and enter a valid Firewall DMZ Server IP Address.</b>";

				}

				//Make sure each octet of Firewall DMZ IP is between 0 and 255
				elseif ( ( ( $_POST["firewall_syslog_ip1"] < "0" ) || ( $_POST["firewall_syslog_ip1"] > "255" ) ) || ( ( $_POST["firewall_syslog_ip2"] < "0" ) || ( $_POST["firewall_syslog_ip2"] > "255" ) ) || ( ( $_POST["firewall_syslog_ip3"] < "0" ) || ( $_POST["firewall_syslog_ip3"] > "255" ) ) || ( ( $_POST["firewall_syslog_ip4"] < "0" ) || ( $_POST["firewall_syslog_ip4"] > "255" ) ) ){

				echo "<h1>!WARNING!</h1>";
				echo "<h2>! An Octet of the Firewall DMZ IP Address is not between 0 and 255</h2>";
				echo "<b>! You clicked a radio button saying you want to configure a Firewall DMZ Server.</b><br />";
				echo "<b>! Please use your browser's back button and enter a valid LFirewall DMZ Server IP Address.</b>";

				}else{


					echo "logging host " . $_POST["firewall_syslog_ip1"] . "." . $_POST["firewall_syslog_ip2"] . "." . $_POST["firewall_syslog_ip3"] . "." . $_POST["firewall_syslog_ip4"] . "<br />";
					echo "logging trap 6<br />";
					echo "logging source-interface loopback 0<br />";
					echo "logging buffered 6<br />";
					echo "no logging console<br />";
					echo "no logging monitor<br />";
					echo "!<br />";

						//If code version is > 12.3(4) enable logging of configuration commands
						if ( ( $_POST["ver_major_release"] >= "12" ) && ( $_POST["ver_maint_release"] >= "3" ) && ( $_POST["ver_maint_revision"] >= "4" ) && ( $_POST["radio_encryption"] == "yes" ) ) {

						echo "archive<br />";
						echo "mkdir flash:/cmd_logs<br />";
						echo "path flash:/cmdlogs <br />";
						echo "log config<br />";
						echo "logging size 200<br />";
						echo "hidekeys<br />";
						echo "notify syslog<br />";
						echo "!<br />";
						}

					echo "!<br />";

					}

			}

			if (  $_POST["radio_logging"] == "local_logging" ) {

			echo "logging buffered 6<br />";
			echo "no logging console<br />";
			echo "no logging monitor<br />";

				//If code version is > 12.3(4) enable logging of config commands
				if ( ( $_POST["ver_major_release"] >= "12" ) && ( $_POST["ver_maint_release"] >= "3" ) && ( $_POST["ver_maint_revision"] >= "4" ) && ( $_POST["radio_encryption"] == "yes" ) ) {

				echo "archive<br />";
				echo "mkdir flash:/cmd_logs<br />";
				echo "path flash:/cmdlogs <br />";
				echo "log config<br />";
				echo "logging size 200<br />";
				echo "hidekeys<br />";
				echo "notify syslog<br />";
				echo "!<br />";
				}

			echo "!<br />";
			echo "!<br />";

			echo "! This software is not sponsored by, endorsed by or affiliated <br />";
			echo "! with Cisco Systems, Inc.  Cisco, Cisco Systems, and IOS are <br />";
			echo "! registered trademarks of Cisco Systems, Inc. in the USA and <br />";
			echo "! certain other countries.  All other trademarks are trademarks <br />";
			echo "! of their respective owners.<br />";

			echo "<small>! BRST - Border Router Security Tool, Helps administrators </small><br />";
			echo "<small>! secure their border routers.</small><br />";
			echo "<small>! Copyright &copy; 2015 Ted LeRoy</small></p><br />";

			}
			
			echo "<h2>! Stop Copying Config File Here !</h2>";

		}

		?>

		</main>
			
		<div class="disclaimer">

			<a href="https://sourceforge.net/projects/borderroutersec">
			<img  class="repo-logo" src="https://sflogo.sourceforge.net/sflogo.php?group_id=304482&amp;type=12"
			width="120" height="30" alt="Get BRST - Border Router Security Tool at
			SourceForge.net." /></a>
			
			<h3>Disclaimer and Licensing</h3>
			
			<p>The "fine print."</p>

			<p>This software is not sponsored by, endorsed by or affiliated with Cisco Systems, Inc.  Cisco, Cisco Systems, and IOS are registered trademarks of Cisco Systems, Inc. in the USA and certain other countries.  All other trademarks are trademarks of their respective owners.</p>

			<p>BRST - Border Router Security Tool, Helps administrators secure their border routers.
			Copyright &copy; 2014 Ted LeRoy</p>

			<p>This program is free software: you can redistribute it and/or modify it under the terms of the GNU Affero General Public License as published by the Free Software Foundation, either version 3 of the License, or (at your option) any later version.</p>

			<p>This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU Affero General Public License for more details.</p>

			<p>A local copy of the license can be found at <a href="copying.html">copying</a>.</p>

			<p>theodore_dot_leroy_at_yahoo_dot_com</p>

			<p>Source code can be obtained at:  <a href="https://sourceforge.net/projects/borderroutersec/">
			https://sourceforge.net/projects/borderroutersec/</a></p>
			
			<a href="https://jigsaw.w3.org/css-validator/check/referer"> <img class="left-logo" style="border:0;width:88px;height:31px" src="https://jigsaw.w3.org/css-validator/images/vcss-blue" alt="Valid CSS!" /></a>
		
			<a href="https://www.gnu.org/licenses/"><img class="right-logo" alt="Affero GPL v3 Logo" src="images/agplv3-88x31.png"></a>
		
		</div>
		
	</div>

</body>

</html>