var configurationcode = "";

function confcodeappend(conftext) {
    configurationcode = configurationcode + conftext;
}

function getCheckedValue( groupName ) {
    var radios = document.getElementsByName( groupName );
    for( i = 0; i < radios.length; i++ ) {
        if( radios[i].checked ) {
            return radios[i].value;
        }
    }
    return null;
}

function Process() {
    configurationcode = "";
    confcodeappend("! Border Router Security Tool (BRST) Recommended Configuration&#13;&#10;");
    confcodeappend("! Start Copying Config File Here !&#13;&#10;");
    confcodeappend("! Enter the following router commands exactly as shown.&#13;&#10;");
    confcodeappend("!&#13;&#10;");
    confcodeappend("! You may copy and paste directly from the results that appear into &#13;&#10;");
    confcodeappend("! the router configuration using your terminal emulation software.&#13;&#10;");
    confcodeappend("!&#13;&#10;");
    confcodeappend("! Comments are preceded by an !.  They will be ignored by the router.&#13;&#10;");
    confcodeappend("!&#13;&#10;");
    confcodeappend("!&#13;&#10;");
    confcodeappend("! global router commands&#13;&#10;");
    confcodeappend("!&#13;&#10;");
    confcodeappend("! Watch for WARNINGS in the Configuration the BRST provides.&#13;&#10;");
    confcodeappend("! If you see a WARNING, read the warning, click your Browser's &#13;&#10;");
    confcodeappend("! back button, correct the error, and click 'Submit' again.&#13;&#10;");
    confcodeappend("!&#13;&#10;");
    confcodeappend("! Entering Global Configuration mode.&#13;&#10;");
    confcodeappend("!&#13;&#10;");
    confcodeappend("configure terminal&#13;&#10;");
    confcodeappend("!&#13;&#10;");
    confcodeappend("ip subnet-zero&#13;&#10;");
    confcodeappend("ip classless&#13;&#10;");
    confcodeappend("!&#13;&#10;");

    var ver_major_release = document.getElementById('ver_major_release').value;
    var ver_maint_release = document.getElementById('ver_maint_release').value;
    var ver_maint_revision = document.getElementById('ver_maint_revision').value;
    var hardware_version = document.getElementById('hardware_version').value;
    var wan_int = document.getElementById('wan_int').value;
    var wan_int_ip1 = document.getElementById('wan_int_ip1').value;
    var wan_int_ip2 = document.getElementById('wan_int_ip2').value;
    var wan_int_ip3 = document.getElementById('wan_int_ip3').value;
    var wan_int_ip4 = document.getElementById('wan_int_ip4').value;
    var wan_int_mask1 = document.getElementById('wan_int_mask1').value;
    var wan_int_mask2 = document.getElementById('wan_int_mask2').value;
    var wan_int_mask3 = document.getElementById('wan_int_mask3').value;
    var wan_int_mask4 = document.getElementById('wan_int_mask4').value;
    var firewall_int = document.getElementById('firewall_int').value;
    var firewall_int_ip1 = document.getElementById('firewall_int_ip1').value;
    var firewall_int_ip2 = document.getElementById('firewall_int_ip2').value;
    var firewall_int_ip3 = document.getElementById('firewall_int_ip3').value;
    var firewall_int_ip4 = document.getElementById('firewall_int_ip4').value;
    var firewall_int_mask1 = document.getElementById('firewall_int_mask1').value;
    var firewall_int_mask2 = document.getElementById('firewall_int_mask2').value;
    var firewall_int_mask3 = document.getElementById('firewall_int_mask3').value;
    var firewall_int_mask4 = document.getElementById('firewall_int_mask4').value;
    var enable_secret_pw = document.getElementById('enable_secret_pw').value;
    var username = document.getElementById('username').value;
    var u_password = document.getElementById('u_password').value;
    var vty_trusted_ip1 = document.getElementById('vty_trusted_ip1').value;
    var vty_trusted_ip2 = document.getElementById('vty_trusted_ip2').value;
    var vty_trusted_ip3 = document.getElementById('vty_trusted_ip3').value;
    var vty_trusted_ip4 = document.getElementById('vty_trusted_ip4').value;
    var gw_ip1 = document.getElementById('gw_ip1').value;
    var gw_ip2 = document.getElementById('gw_ip2').value;
    var gw_ip3 = document.getElementById('gw_ip3').value;
    var gw_ip4 = document.getElementById('gw_ip4').value;
    var loopback_ip1 = document.getElementById('loopback_ip1').value;
    var loopback_ip2 = document.getElementById('loopback_ip2').value;
    var loopback_ip3 = document.getElementById('loopback_ip3').value;
    var loopback_ip4 = document.getElementById('loopback_ip4').value;
    var ntp_svr1_ip1 = document.getElementById('ntp_svr1_ip1').value;
    var ntp_svr1_ip2 = document.getElementById('ntp_svr1_ip2').value;
    var ntp_svr1_ip3 = document.getElementById('ntp_svr1_ip3').value;
    var ntp_svr1_ip4 = document.getElementById('ntp_svr1_ip4').value;
    var local_dmz_mask1 = document.getElementById('local_dmz_mask1').value;
    var local_dmz_mask2 = document.getElementById('local_dmz_mask2').value;
    var local_dmz_mask3 = document.getElementById('local_dmz_mask3').value;
    var local_dmz_mask4 = document.getElementById('local_dmz_mask4').value;
    var firewall_syslog_ip1 = document.getElementById('firewall_syslog_ip1').value;
    var firewall_syslog_ip2 = document.getElementById('firewall_syslog_ip2').value;
    var firewall_syslog_ip3 = document.getElementById('firewall_syslog_ip3').value;
    var firewall_syslog_ip4 = document.getElementById('firewall_syslog_ip4').value;
    var local_dmz_ip1 = document.getElementById('local_dmz_ip1').value;
    var local_dmz_ip2 = document.getElementById('local_dmz_ip2').value;
    var local_dmz_ip3 = document.getElementById('local_dmz_ip3').value;
    var local_dmz_ip4 = document.getElementById('local_dmz_ip4').value;
    var local_dmz_name = document.getElementById('local_dmz_name').value;
    var local_dmz_syslog_ip1 = document.getElementById('local_dmz_syslog_ip1').value;
    var local_dmz_syslog_ip2 = document.getElementById('local_dmz_syslog_ip2').value;
    var local_dmz_syslog_ip3 = document.getElementById('local_dmz_syslog_ip3').value;
    var local_dmz_syslog_ip4 = document.getElementById('local_dmz_syslog_ip4').value;
	
	
    var radio_logging = getCheckedValue('radio_logging');
    var radio_encryption = getCheckedValue('radio_encryption');

    /*
    var subnet10_wan = document.getElementById('subnet10_wan').value;
    var subnet10_fw = document.getElementById('subnet10_fw').value;
    var subnet10_loopback = document.getElementById('subnet10_loopback').value;
    var subnet10_dmz = document.getElementById('subnet10_dmz').value;
    var subnet10_fw_syslog = document.getElementById('subnet10_fw_syslog').value;
    var subnet10 = document.getElementById('subnet10').value;*/

    if ((ver_major_release == "") || (ver_maint_release == "") || (ver_maint_revision == "")) {

        confcodeappend("!WARNING!&#13;&#10;");
        confcodeappend("! You did not properly enter a code version.&#13;&#10;");
        confcodeappend("! The brst needs the code version to generate a configuration file.&#13;&#10;");
        confcodeappend("! Please return to the brst main page and enter the code version.&#13;&#10;");
        confcodeappend("! You can obtain the code version by typing the show version command at the enable prompt.&#13;&#10;");

    }

    //Make sure Code Version is greater than 11
    else if (ver_major_release < 11) {

        confcodeappend("!WARNING!&#13;&#10;");
        confcodeappend("! Your code is too old.&#13;&#10;");
        confcodeappend("! The brst needs a code version newer than 11 to generate a valid configuration file.&#13;&#10;");
        confcodeappend("! Please obtain a newer code version by purchasing a newer router or code version.&#13;&#10;");

    }

    //Make sure a Router Model is entered
    else if (hardware_version == "") {

        confcodeappend("!WARNING!&#13;&#10;");
        confcodeappend("! You did not enter the model of your router.&#13;&#10;");
        confcodeappend("! Please use your broswer's back button and enter a router model.&#13;&#10;");

    }

    //Make sure Gateway IP ! Null
    else if ((gw_ip1 == "") || (gw_ip2 == "") || (gw_ip3 == "") || (gw_ip4 == "")) {

        confcodeappend("!WARNING!");
        confcodeappend("! An Octet of the Gateway IP Address is blank");
        confcodeappend("! Please use your browser's back button and enter a valid Gateway IP Address.");

    }

    //Make sure each octet of Gateway IP is between 0 and 255
    else if (((gw_ip1 < 0) || (gw_ip1 > 255)) || ((gw_ip2 < 0) || (gw_ip2 > 255)) || ((gw_ip3 < 0) || (gw_ip3 > 255)) || ((gw_ip4 < 0) || (gw_ip4 > 255))) {

        confcodeappend("!WARNING!&#13;&#10;");
        confcodeappend("! An Octet of the Gateway IP Address is not between 0 and 255&#13;&#10;");
        confcodeappend("! Please use your browser's back button and enter a valid Gateway IP Address.&#13;&#10;");

    }

    //Make sure Internet interface name ! Null
    else if (wan_int == "") {

        confcodeappend("!WARNING!&#13;&#10;");
        confcodeappend("! The Internet Interface name is blank&#13;&#10;");
        confcodeappend("! Please use your browser's back button and enter an Internet Interface name.&#13;&#10;");

    }

    //Make sure Internet IP ! Null
    else if ((wan_int_ip1 == "") || (wan_int_ip2 == "") || (wan_int_ip3 == "") || (wan_int_ip4 == "")) {

        confcodeappend("!WARNING!&#13;&#10;");
        confcodeappend("! An Octet of the Internet IP Address is blank&#13;&#10;");
        confcodeappend("! Please use your browser's back button and enter a valid Internet IP Address.&#13;&#10;");

    }

    //Make sure each octet of Internet IP is between 0 and 255
    else if (((wan_int_ip1 < 0) || (wan_int_ip1 > 255)) || ((wan_int_ip2 < 0) || (wan_int_ip2 > 255)) || ((wan_int_ip3 < 0) || (wan_int_ip3 > 255)) || ((wan_int_ip4 < 0) || (wan_int_ip4 > 255))) {

        confcodeappend("!WARNING!&#13;&#10;");
        confcodeappend("! An Octet of the Internet IP Address is not between 0 and 255&#13;&#10;");
        confcodeappend("! Please use your browser's back button and enter a valid Internet IP Address.&#13;&#10;");

    }

    //Make sure Internet Mask ! Null
    else if ((wan_int_mask1 == "") || (wan_int_mask2 == "") || (wan_int_mask3 == "") || (wan_int_mask4 == "")) {

        confcodeappend("!WARNING!&#13;&#10;");
        confcodeappend("! An Octet of the Internet Mask is blank&#13;&#10;");
        confcodeappend("! Please use your browser's back button and enter a valid Internet Internet Mask Address.&#13;&#10;");

    }

    //Make sure each octet of Internet Mask is between 0 and 255
    else if (((wan_int_mask1 < 0) || (wan_int_mask1 > 255)) || ((wan_int_mask2 < 0) || (wan_int_mask2 > 255)) || ((wan_int_mask3 < 0) || (wan_int_mask3 > 255)) || ((wan_int_mask4 < 0) || (wan_int_mask4 > 255))) {

        confcodeappend("!WARNING!&#13;&#10;");
        confcodeappend("! An Octet of the Internet Mask Address is not between 0 and 255&#13;&#10;");
        confcodeappend("! Please use your browser's back button and enter a valid Internet Interface Mask Address.&#13;&#10;");

    }

    //Make sure Firewall interface name ! Null
    else if (firewall_int == "") {

        confcodeappend("!WARNING!&#13;&#10;");
        confcodeappend("! The Firewall Interface name is blank&#13;&#10;");
        confcodeappend("! Please use your browser's back button and enter an Firewall Interface name.&#13;&#10;");

    }

    //Make sure Firewall IP ! Null
    else if ((firewall_int_ip1 == "") || (firewall_int_ip2 == "") || (firewall_int_ip3 == "") || (firewall_int_ip4 == "")) {

        confcodeappend("!WARNING!&#13;&#10;");
        confcodeappend("! An Octet of the Firewall IP Address is blank&#13;&#10;");
        confcodeappend("! Please use your browser's back button and enter a valid Firewall IP Address.&#13;&#10;");

    }

    //Make sure each octet of Firewall IP is between 0 and 255
    else if (((firewall_int_ip1 < 0) || (firewall_int_ip1 > 255)) || ((firewall_int_ip2 < 0) || (firewall_int_ip2 > 255)) || ((firewall_int_ip3 < 0) || (firewall_int_ip3 > 255)) || ((firewall_int_ip4 < 0) || (firewall_int_ip4 > 255))) {

        confcodeappend("!WARNING!&#13;&#10;");
        confcodeappend("! An Octet of the Firewall IP Address is not between 0 and 255&#13;&#10;");
        confcodeappend("! Please use your browser's back button and enter a valid Firewall IP Address.&#13;&#10;");

    }

    //Make sure Firewall Mask ! Null
    else if ((firewall_int_mask1 == "") || (firewall_int_mask2 == "") || (firewall_int_mask3 == "") || (firewall_int_mask4 == "")) {

        confcodeappend("!WARNING!&#13;&#10;");
        confcodeappend("! An Octet of the Firewall Mask is blank&#13;&#10;");
        confcodeappend("! Please use your browser's back button and enter a valid Firewall Interface Mask Address.&#13;&#10;");

    }

    //Make sure each octet of Firewall Mask is between 0 and 255
    else if (((firewall_int_mask1 < 0) || (firewall_int_mask1 > 255)) || ((firewall_int_mask2 < 0) || (firewall_int_mask2 > 255)) || ((firewall_int_mask3 < 0) || (firewall_int_mask3 > 255)) || ((firewall_int_mask4 < 0) || (firewall_int_mask4 > 255))) {

        confcodeappend("!WARNING!&#13;&#10;");
        confcodeappend("! An Octet of the Firewall Mask Address is not between 0 and 255&#13;&#10;");
        confcodeappend("! Please use your browser's back button and enter a valid Firewall Interface Mask Address.&#13;&#10;");

    }

    //Make sure Enable Secret Password is not Null
    else if (enable_secret_pw == "") {

        confcodeappend("!WARNING!&#13;&#10;");
        confcodeappend("! The Enable Secret Password is blank&#13;&#10;");
        confcodeappend("! Please use your browser's back button and enter an Enable Secret Password.&#13;&#10;");

    }

    //Make sure the Username is not Null
    else if (username == "") {

        confcodeappend("!WARNING!&#13;&#10;");
        confcodeappend("! The Username is blank&#13;&#10;");
        confcodeappend("! Please use your browser's back button and enter a Username.&#13;&#10;");

    }

    //Make sure the User Password is not Null
    else if (u_password == "") {

        confcodeappend("!WARNING!&#13;&#10;");
        confcodeappend("! The User Password is blank&#13;&#10;");
        confcodeappend("! Please use your browser's back button and enter a User Password.&#13;&#10;");

    }

    //Make sure Trusted IP ! Null
    else if ((vty_trusted_ip1 == "") || (vty_trusted_ip2 == "") || (vty_trusted_ip3 == "") || (vty_trusted_ip4 == "")) {

        confcodeappend("!WARNING!&#13;&#10;");
        confcodeappend("! An Octet of the Trusted IP Address is blank&#13;&#10;");
        confcodeappend("! Please use your browser's back button and enter a valid Trusted IP Address.&#13;&#10;&#13;&#10;");
        confcodeappend("! If you will only connect from your Local Area Network, you can use the Firewall's Outside IP Address.&#13;&#10;");

    }

    //Make sure each octet of Trusted IP is between 0 and 255
    else if (((vty_trusted_ip1 < 0) || (vty_trusted_ip1 > 255)) || ((vty_trusted_ip2 < 0) || (vty_trusted_ip2 > 255)) || ((vty_trusted_ip3 < 0) || (vty_trusted_ip3 > 255)) || ((vty_trusted_ip4 < 0) || (vty_trusted_ip4 > 255))) {

        confcodeappend("!WARNING!&#13;&#10;");
        confcodeappend("! An Octet of the Trusted IP Address is not between 0 and 255&#13;&#10;");
        confcodeappend("! Please use your browser's back button and enter a valid Trusted IP Address.&#13;&#10;");
        confcodeappend("! If you will only connect from your Local Area Network, you can use the Firewall's Outside IP Address.&#13;&#10;");

    } else {

        //If all sanity checks pass, create configuration file based on input.
        confcodeappend("! default route&#13;&#10;");
        confcodeappend("ip route 0.0.0.0 0.0.0.0 " + gw_ip1 + "." + gw_ip2 + "." + gw_ip3 + "." + gw_ip4 + "&#13;&#10;");
        confcodeappend("!&#13;&#10;");

        confcodeappend("!Section 1: Unneeded Services&#13;&#10;");
        confcodeappend("!&#13;&#10;");

        confcodeappend("!Section 1a: Unneeded Global Services&#13;&#10;");
        confcodeappend("!&#13;&#10;");

        if ((normal == "yes") || (checkbox_boot.checked)) {

            confcodeappend("no boot network&#13;&#10;");

        }

        if ((normal == "yes") || (checkbox_cdp.checked)) {

            confcodeappend("no cdp run&#13;&#10;");

        }

        if ((normal == "yes") || (checkbox_svc.checked)) {

            confcodeappend("no service config&#13;&#10;");

        }

        if ((normal == "yes") || (checkbox_dhcp.checked)) {

            confcodeappend("no service dhcp&#13;&#10;");

        }

        if ((normal == "yes") || (checkbox_pad.checked)) {

            confcodeappend("no service pad&#13;&#10;");

        }

        if ((normal == "yes") || (checkbox_finger.checked)) {

            confcodeappend("no ip finger&#13;&#10;");

        }

        if ((normal == "yes") || (checkbox_grat_arps.checked)) {

            confcodeappend("no ip gratuitous-arps&#13;&#10;");

        }

        if ((normal == "yes") || (checkbox_http.checked)) {

            confcodeappend("no ip http server&#13;&#10;");

        }

        if (((normal == "yes") || (checkbox_http_sec.checked)) && (radio_encryption == "yes")) {

            confcodeappend("no ip http secure-server&#13;&#10;");

        }

        if ((normal == "yes") || (checkbox_name_srv.checked)) {

            confcodeappend("no ip name-server&#13;&#10;");

        }

        if ((normal == "yes") || (checkbox_src_rt.checked)) {

            confcodeappend("no ip source-route&#13;&#10;");

        }

        if ((normal == "yes") || (checkbox_lldp.checked)) {

            confcodeappend("no lldp run&#13;&#10;");

        }

        if ((normal == "yes") || (checkbox_tcp_ss.checked)) {

            confcodeappend("no service tcp-small-servers&#13;&#10;");

        }

        if ((normal == "yes") || (checkbox_udp_ss.checked)) {

            confcodeappend("no service udp-small-servers&#13;&#10;");

        }

        if ((normal == "yes") || (checkbox_ip_options.checked)) {

            confcodeappend("ip options drop&#13;&#10;");

        }

        confcodeappend("!&#13;&#10;");

        confcodeappend("!Section 1b: Unneeded Interface Services&#13;&#10;");
        confcodeappend("!&#13;&#10;");

        confcodeappend("!Section 1b1: Internet Interface Services&#13;&#10;");
        confcodeappend("!&#13;&#10;");

        confcodeappend("interface " + wan_int + "&#13;&#10;");
        confcodeappend("ip address " + wan_int_ip1 + "." + wan_int_ip2 + "." + wan_int_ip3 + "." + wan_int_ip4 + " " + wan_int_mask1 + "." + wan_int_mask2 + "." + wan_int_mask3 + "." + wan_int_mask4 + "&#13;&#10;");

        if ((normal == "yes") || (checkbox_wan_cdp_ena.checked)) {

            confcodeappend("no cdp enable&#13;&#10;");

        }

        if ((normal == "yes") || (checkbox_wan_ip_bcast.checked)) {

            confcodeappend("no ip directed-broadcast&#13;&#10;");

        }

        if ((normal == "yes") || (checkbox_wan_redirects.checked)) {

            confcodeappend("no ip redirect&#13;&#10;");

        }

        if ((normal == "yes") || (checkbox_wan_proxy_arp.checked)) {

            confcodeappend("no ip proxy-arp&#13;&#10;");

        }

        if ((normal == "yes") || (checkbox_wan_mask_reply.checked)) {

            confcodeappend("no ip mask-reply&#13;&#10;");

        }

        if ((normal == "yes") || (checkbox_wan_unreachables.checked)) {

            confcodeappend("no ip unreachables&#13;&#10;");

        }

        if ((normal == "yes") || (checkbox_wan_mop.checked)) {

            confcodeappend("no mop enabled&#13;&#10;");

        }

        if ((normal == "yes") || (checkbox_wan_ntp.checked)) {

            //Check for router models that only support Simple Network Time Protocol (sntp).
            if ((hardware_version >= 1600) && (hardware_version <= 1699) || (hardware_version >= 1003) && (hardware_version <= 1005) || (hardware_version >= 1720) && (hardware_version <= 1729) || (hardware_version >= 1750) && (hardware_version <= 1759)) {

                confcodeappend("!&#13;&#10;");

                //For all other models disable ntp
            } else {

                confcodeappend("ntp disable&#13;&#10;");

            }

        }

        confcodeappend("no shutdown&#13;&#10;");
        confcodeappend("exit&#13;&#10;");
        confcodeappend("!&#13;&#10;");

        confcodeappend("!Section 1b2: Firewall Facing Interface Services&#13;&#10;");
        confcodeappend("!&#13;&#10;");

        confcodeappend("interface " + firewall_int + "&#13;&#10;");
        confcodeappend("ip address " + firewall_int_ip1 + "." + firewall_int_ip2 + "." + firewall_int_ip3 + "." + firewall_int_ip4 + " " + firewall_int_mask1 + "." + firewall_int_mask2 + "." + firewall_int_mask3 + "." + firewall_int_mask4 + "&#13;&#10;");

        if ((normal == "yes") || (checkbox_fw_cdp_ena.checked)) {

            confcodeappend("no cdp enable&#13;&#10;");

        }

        if ((normal == "yes") || (checkbox_fw_ip_bcast.checked)) {

            confcodeappend("no ip directed-broadcast&#13;&#10;");

        }

        if ((normal == "yes") || (checkbox_fw_redirects.checked)) {

            confcodeappend("no ip redirect&#13;&#10;");

        }

        if ((normal == "yes") || (checkbox_fw_proxy_arp.checked)) {

            confcodeappend("no ip proxy-arp&#13;&#10;");

        }

        if ((normal == "yes") || (checkbox_fw_mask_reply.checked)) {

            confcodeappend("no ip mask-reply&#13;&#10;");

        }

        if ((normal == "yes") || (checkbox_fw_unreachables.checked)) {

            confcodeappend("no ip unreachables&#13;&#10;");

        }

        if ((normal == "yes") || (checkbox_fw_mop.checked)) {

            confcodeappend("no mop enabled&#13;&#10;");

        }

        if ((normal == "yes") || (checkbox_fw_ntp.checked)) {

            //Check for router models that only do Simple Network Time Protocol (sntp).
            if ((hardware_version >= 1600) && (hardware_version <= 1699) || (hardware_version >= 1003) && (hardware_version <= 1005) || (hardware_version >= 1720) && (hardware_version <= 1729) || (hardware_version >= 1750) && (hardware_version <= 1759)) {

                confcodeappend("!&#13;&#10;");

                //For all other models disable ntp
            } else {

                confcodeappend("ntp disable&#13;&#10;");

            }

        }

        confcodeappend("no shutdown&#13;&#10;");
        confcodeappend("exit&#13;&#10;");
        confcodeappend("!&#13;&#10;");

        confcodeappend("!Section 2: Recommended Services&#13;&#10;");
        confcodeappend("!&#13;&#10;");

        confcodeappend("!Section 2a: Recommended Global Services&#13;&#10;");
        confcodeappend("!&#13;&#10;");

        if ((normal == "yes") || (checkbox_cef.checked)) {

            confcodeappend("ip cef&#13;&#10;");

        }

        if ((normal == "yes") || (checkbox_tcp_keepalives_in.checked)) {

            confcodeappend("service tcp-keepalives-in&#13;&#10;");

        }

        if ((normal == "yes") || (checkbox_tcp_keepalives_out.checked)) {

            confcodeappend("service tcp-keepalives-out&#13;&#10;");

        }

        if ((normal == "yes") || (checkbox_pw_encryption.checked)) {

            confcodeappend("service password-encryption&#13;&#10;");

        }

        if ((normal == "yes") || (checkbox_subnet_zero.checked)) {

            confcodeappend("ip subnet-zero&#13;&#10;");

        }

        if ((normal == "yes") || (checkbox_ip_classless.checked)) {

            confcodeappend("ip classless&#13;&#10;");

        }


        confcodeappend("!&#13;&#10;");

        confcodeappend("!Section 2c: Loopback Interface&#13;&#10;");
        confcodeappend("!&#13;&#10;");

        if ((normal == "yes") || (checkbox_loopback.checked)) {

            //Make sure Loopback IP ! Null
            if ((loopback_ip1 == "") || (loopback_ip2 == "") || (loopback_ip3 == "") || (loopback_ip4 == "")) {

                confcodeappend("!WARNING!&#13;&#10;");
                confcodeappend("! An Octet of the Loopback IP Address is blank&#13;&#10;");
                confcodeappend("! You checked the box saying you want to configure a Loopback Interface.&#13;&#10;");
                confcodeappend("! Please use your browser's back button and enter a valid Loopback IP Address.&#13;&#10;");

            }

            //Make sure each octet of Loopback IP is between 0 and 255
            else if (((loopback_ip1 < 0) || (loopback_ip1 > 255)) || ((loopback_ip2 < 0) || (loopback_ip2 > 255)) || ((loopback_ip3 < 0) || (loopback_ip3 > 255)) || ((loopback_ip4 < 0) || (loopback_ip4 > 255))) {

                confcodeappend("!WARNING!");
                confcodeappend("! An Octet of the Loopback IP Address is not between 0 and 255");
                confcodeappend("! You checked the box saying you want to configure a Loopback Interface.&#13;&#10;");
                confcodeappend("! Please use your browser's back button and enter a valid Loopback IP Address.");

            } else {

                confcodeappend("interface loopback 0&#13;&#10;");
                confcodeappend("ip address " + loopback_ip1 + "." + loopback_ip2 + "." + loopback_ip3 + "." + loopback_ip4 + " 255.255.255.255&#13;&#10;");
                confcodeappend("no cdp enable&#13;&#10;");
                confcodeappend("no ip directed-broadcast&#13;&#10;");
                confcodeappend("no ip redirect&#13;&#10;");
                confcodeappend("no ip proxy-arp&#13;&#10;");
                confcodeappend("no ip mask-reply&#13;&#10;");
                confcodeappend("no ip unreachables&#13;&#10;");
                confcodeappend("no mop enabled&#13;&#10;");
                confcodeappend("no shutdown&#13;&#10;");
                confcodeappend("exit&#13;&#10;");
                confcodeappend("!&#13;&#10;");

            }

        }

        confcodeappend("!Section 2d: Null Interface&#13;&#10;");
        confcodeappend("!&#13;&#10;");

        if ((normal == "yes") || (checkbox_null.checked)) {
            confcodeappend("interface null 0&#13;&#10;");
            confcodeappend("no ip unreachables&#13;&#10;");
            confcodeappend("exit&#13;&#10;");
            confcodeappend("!&#13;&#10;");

        }

        confcodeappend("!Section 2e: Configure Network Time Protocol&#13;&#10;");
        confcodeappend("!&#13;&#10;");

        if ((normal == "yes") || (checkbox_ntp_config.checked)) {

            //Make sure NTP Server 1's IPs are ! Null
            if ((ntp_svr1_ip1 == "") || (ntp_svr1_ip2 == "") || (ntp_svr1_ip3 == "") || (ntp_svr1_ip4 == "")) {

                confcodeappend("!WARNING!");
                confcodeappend("! An Octet of the Primary NTP Server's IP Address is blank");
                confcodeappend("! Please use your browser's back button and enter a valid Primary NTP Server IP Address.&#13;&#10;");

            }

            //Make sure each octet of NTP Server 1's IPs are between 0 and 255
            if (((ntp_svr1_ip1 < 0) || (ntp_svr1_ip1 > 255)) || ((ntp_svr1_ip2 < 0) || (ntp_svr1_ip2 > 255)) || ((ntp_svr1_ip3 < 0) || (ntp_svr1_ip3 > 255)) || ((ntp_svr1_ip4 < 0) || (ntp_svr1_ip4 > 255))) {

                confcodeappend("!WARNING!");
                confcodeappend("! An Octet of the Primary NTP Server's IP Address is not between 0 and 255");
                confcodeappend("! Please use your browser's back button and enter a valid Primary NTP Server IP Address.&#13;&#10;");

            }

            //Check for router models that only do Simple Network Time Protocol (sntp).
            else if ((hardware_version >= 1600) && (hardware_version <= 1699) || (hardware_version >= 1003) && (hardware_version <= 1005) || (hardware_version >= 1720) && (hardware_version <= 1729) || (hardware_version >= 1750) && (hardware_version <= 1759)) {

                //If NTP Server IPs are present and IPs are between 0 and 255, configure NTP or SNTP as applicable.
                confcodeappend("sntp server " + ntp_svr1_ip1 + "." + ntp_svr1_ip2 + "." + ntp_svr1_ip3 + "." + ntp_svr1_ip4 + "&#13;&#10;");
                confcodeappend("!Your hardware supports only Simple Network Time Protocol (SNTP)&#13;&#10;");
                confcodeappend("!SNTP does not support multiple servers.  Only one server will be configured. &#13;&#10;");
                confcodeappend("!&#13;&#10;");

            }

            //For all other models, use Network Time Protocol (ntp).
            else {

                //If loopback is configured, use it as ntp source
                if ((normal == "yes") || (checkbox_loopback.checked)) {

                    confcodeappend("ntp source loopback 0&#13;&#10;");

                }

                //Make sure NTP Server 2's IPs are ! Null
                if ((ntp_svr2_ip1 == "") || (ntp_svr2_ip2 == "") || (ntp_svr2_ip3 == "") || (ntp_svr2_ip4 == "")) {

                    confcodeappend("!WARNING!");
                    confcodeappend("! An Octet of the Secondary NTP Server's IP Address is blank");
                    confcodeappend("! Please use your browser's back button and enter a valid Secondary NTP Server IP Address.");

                }

                //Make sure each octet of NTP Server 2's IPs are between 0 and 255
                else if (((ntp_svr2_ip1 < 0) || (ntp_svr2_ip1 > 255)) || ((ntp_svr2_ip2 < 0) || (ntp_svr2_ip2 > 255)) || ((ntp_svr2_ip3 < 0) || (ntp_svr2_ip3 > 255)) || ((ntp_svr2_ip4 < 0) || (ntp_svr2_ip4 > 255))) {

                    confcodeappend("!WARNING!");
                    confcodeappend("! An Octet of the Secondary NTP Server's IP Address is not between 0 and 255");
                    confcodeappend("! Please use your browser's back button and enter a valid Secondary NTP Server IP Address.&#13;&#10;)");

                } else {

                    //If NTP Server IPs are present and IPs are between 0 and 255, configure NTP or SNTP as applicable.
                    confcodeappend("ntp server " + ntp_svr1_ip1 + "." + ntp_svr1_ip2 + "." + ntp_svr1_ip3 + "." + ntp_svr1_ip4 + " source loopback 0 prefer&#13;&#10;");
                    confcodeappend("ntp server " + ntp_svr2_ip1 + "." + ntp_svr2_ip2 + "." + ntp_svr2_ip3 + "." + ntp_svr2_ip4 + " source loopback 0&#13;&#10;");
                    confcodeappend("no access-list 21&#13;&#10;");
                    confcodeappend("access-list 21 permit " + ntp_svr1_ip1 + "." + ntp_svr1_ip2 + "." + ntp_svr1_ip3 + "." + ntp_svr1_ip4 + "&#13;&#10;");
                    confcodeappend("access-list 21 permit " + ntp_svr2_ip1 + "." + ntp_svr2_ip2 + "." + ntp_svr2_ip3 + "." + ntp_svr2_ip4 + "&#13;&#10;");
                    confcodeappend("access-list 21 deny any log&#13;&#10;");
                    confcodeappend("ntp access-group peer 21&#13;&#10;");
                    confcodeappend("!&#13;&#10;");

                }

            }

        }

        confcodeappend("!Section 3: Access Control&#13;&#10;");
        confcodeappend("!&#13;&#10;");

        confcodeappend("!Section 3a: Enable Secret and Local User Account&#13;&#10;");
        confcodeappend("!&#13;&#10;");

        if ((ver_major_release >= 12) && (ver_maint_release >= 2) && (ver_maint_revision >= 8) && ((hardware_version < 7600) || (hardware_version > 7699))) {

            confcodeappend("username " + username + " secret " + u_password + "&#13;&#10;");
            confcodeappend("enable secret " + enable_secret_pw + "&#13;&#10;");
            confcodeappend("no enable password&#13;&#10;");
            confcodeappend("!&#13;&#10;");

        } else {

            confcodeappend("username " + username + " password " + u_password + "&#13;&#10;");
            confcodeappend("enable secret " + enable_secret_pw + "&#13;&#10;");
            confcodeappend("no enable password&#13;&#10;");
            confcodeappend("!&#13;&#10;");

        }

        confcodeappend("!Section 3b: Auxilliary Port&#13;&#10;");
        confcodeappend("!&#13;&#10;");

        if ((normal == "yes") || (checkbox_aux.checked)) {
            confcodeappend("line aux 0&#13;&#10;");
            confcodeappend("no exec&#13;&#10;");
            confcodeappend("login ctrlc-disable&#13;&#10;");
            confcodeappend("no password&#13;&#10;");
            confcodeappend("exec-timeout 0 1&#13;&#10;");
            confcodeappend("transport output none&#13;&#10;");
            confcodeappend("transport input none&#13;&#10;");
            confcodeappend("exit&#13;&#10;");
            confcodeappend("!&#13;&#10;");

        } else {

            confcodeappend("! Disable Aux Port was unchecked&#13;&#10;");
            confcodeappend("! If you have an Aux Port, but do not&#13;&#10;");
            confcodeappend("! need it enabled, check the box&#13;&#10;");
            confcodeappend("! and rerun brst.&#13;&#10;");
            confcodeappend("!&#13;&#10;");

        }

        confcodeappend("!Section 3c: Console Port&#13;&#10;");
        confcodeappend("!&#13;&#10;");

        if ((normal == "yes") || (checkbox_console.checked)) {
            confcodeappend("line con 0&#13;&#10;");
            confcodeappend("logging synchronous&#13;&#10;");
            confcodeappend("transport output none&#13;&#10;");
            confcodeappend("exit&#13;&#10;");
            confcodeappend("!&#13;&#10;");

        }

        confcodeappend("!Section 3d: Virtual Terminal (vty) Ports&#13;&#10;");
        confcodeappend("!&#13;&#10;");

        if ((normal == "yes") || (checkbox_vty.checked)) {

            if ((radio_encryption == "yes") && ((ver_major_release >= 12) && (ver_maint_release >= 2) && (ver_maint_revision >= "14")) || (radio_encryption == "yes") && ((ver_major_release >= 12) && (ver_maint_release >= "3"))) {

                confcodeappend("no ip access-list extended ssh-remote&#13;&#10;");
                confcodeappend("ip access-list extended ssh-remote&#13;&#10;");
                confcodeappend("permit tcp host " + vty_trusted_ip1 + "." + vty_trusted_ip2 + "." + vty_trusted_ip3 + "." + vty_trusted_ip4 + " host 0.0.0.0 eq 22 log&#13;&#10;");
                confcodeappend("deny ip any any log&#13;&#10;");
                confcodeappend("exit&#13;&#10;");
                confcodeappend("!&#13;&#10;");
                confcodeappend("line vty 0 4&#13;&#10;");
                confcodeappend("access-class ssh-remote in&#13;&#10;");
                confcodeappend("exec-timeout 20 0&#13;&#10;");
                confcodeappend("transport input ssh&#13;&#10;");
                confcodeappend("transport output none&#13;&#10;");
                confcodeappend("exit&#13;&#10;");
                confcodeappend("!&#13;&#10;");

            } else {

                confcodeappend("no ip access-list extended telnet-remote&#13;&#10;");
                confcodeappend("ip access-list extended telnet-remote&#13;&#10;");
                confcodeappend("permit tcp host " + vty_trusted_ip1 + "." + vty_trusted_ip2 + "." + vty_trusted_ip3 + "." + vty_trusted_ip4 + " host 0.0.0.0 eq telnet log&#13;&#10;");
                confcodeappend("deny ip any any log&#13;&#10;");
                confcodeappend("exit&#13;&#10;");
                confcodeappend("!&#13;&#10;");
                confcodeappend("line vty 0 4&#13;&#10;");
                confcodeappend("access-class telnet-remote in&#13;&#10;");
                confcodeappend("exec-timeout 20 0&#13;&#10;");
                confcodeappend("transport input telnet&#13;&#10;");
                confcodeappend("transport output none&#13;&#10;");
                confcodeappend("exit&#13;&#10;");
                confcodeappend("!&#13;&#10;");
            }

        }


        confcodeappend("!Section 3e: Restricting Command Access&#13;&#10;");
        confcodeappend("!&#13;&#10;");

        if ((normal == "yes") || (checkbox_cmd_access.checked)) {
            confcodeappend("privilege exec level 15 connect&#13;&#10;");
            confcodeappend("privilege exec level 15 telnet&#13;&#10;");
            confcodeappend("privilege exec level 15 rlogin&#13;&#10;");
            confcodeappend("privilege exec level 15 show ip access-lists&#13;&#10;");
            confcodeappend("privilege exec level 15 show access-lists&#13;&#10;");
            confcodeappend("privilege exec level 15 show logging&#13;&#10;");

            if ((radio_encryption == "yes") && ((ver_major_release >= 12) && (ver_maint_release >= 2) && (ver_maint_revision >= "14")) || ((ver_major_release >= 12) && (ver_maint_release >= "3"))) {

                confcodeappend("privilege exec level 15 ssh&#13;&#10;");

            }

            confcodeappend("privilege exec level 1 show ip&#13;&#10;");
            confcodeappend("!&#13;&#10;");

        }

        confcodeappend("!Section 3f: AAA Access Control&#13;&#10;");
        confcodeappend("!&#13;&#10;");

        if ((normal == "yes") || (checkbox_aaa.checked)) {
            confcodeappend("aaa new-model&#13;&#10;");
            confcodeappend("aaa authentication login default local&#13;&#10;");

            confcodeappend("line vty 0 4&#13;&#10;");
            confcodeappend("login authentication default&#13;&#10;");
            confcodeappend("exit&#13;&#10;");

            confcodeappend("line con 0&#13;&#10;");
            confcodeappend("login authentication default&#13;&#10;");
            confcodeappend("exit&#13;&#10;");
            confcodeappend("!&#13;&#10;");

        }

        confcodeappend("!Section 4: Anti-spoofing&#13;&#10;");
        confcodeappend("!&#13;&#10;");

        confcodeappend("!Section 4a: Null Routing&#13;&#10;");
        confcodeappend("!&#13;&#10;");

        //Evaluate for use of Private Schemes.  If found, set variables for later use.

        //Look for 10.x.x.x network use on router

        subnet10_wan = 0;
        subnet10_fw = 0;
        subnet172_loopback = 0;
        subnet10_dmz = 0;
        subnet10_fw_syslog = 0;
        subnet10 = 0;
        subnet10_loopback = 0; //Added by Abhi

        //Store a variable value for use on interface access lists

        if (wan_int_ip1 == 10) {

            subnet10_wan = 1;

        }

        if (firewall_int_ip1 == 10) {

            subnet10_fw = 1;

        }

        if (loopback_ip1 == 10) {

            subnet10_loopback = 1;

        }

        if (local_dmz_ip1 == 10) {

            subnet10_dmz = 1;

        }

        if (firewall_syslog_ip1 == 10) {

            subnet10_fw_syslog = 1;

        }

        //If any interface uses a 10.x.x.x network, set variable so it can be removed from null routing.

        if ((subnet10_wan == 1) || (subnet10_fw == 1) || (subnet10_loopback == 1) || (subnet10_dmz == 1) || (subnet10_fw_syslog == 1)) {

            subnet10 = 1;

        }

        //Look for 172.16.x.x through 172.32.x.x network use on router.

        subnet172_wan = 0;
        subnet172_fw = 0;
        subnet172_loopback = 0;
        subnet172_dmz = 0;
        subnet172_fw_syslog = 0;
        subnet172 = 0;

        if (wan_int_ip1 == 172 && wan_int_ip2 >= 16 && wan_int_ip2 <= 32) {

            subnet172_wan = 1;

        }

        if (firewall_int_ip1 == "172" && firewall_int_ip2 >= "16" && wan_int_ip2 <= "32") {

            subnet172_fw = 1;

        }

        if (loopback_ip1 == "172" && loopback_ip2 >= "16" && wan_int_ip2 <= "32") {

            subnet172_loopback = 1;

        }

        if (local_dmz_ip1 == "172" && local_dmz_ip2 >= "16" && wan_int_ip2 <= "32") {

            subnet172_dmz = 1;

        }

        if (firewall_syslog_ip1 == "172" && firewall_syslog_ip2 >= "16" && wan_int_ip2 <= "32") {

            subnet172_fw_syslog = 1;

        }

        //If any interface uses a 172.16.x.x through 172.32.x.x network, set variable so it can be reomoved from null routing.

        if ((subnet172_wan == 1) || (subnet172_fw == 1) || (subnet172_loopback == 1) || (subnet172_dmz == 1) || (subnet172_fw_syslog == 1)) {

            subnet172 = 1;

        }

        //Look for 192.168.x.x network use on router.

        subnet192_wan = 0;
        subnet192_fw = 0;
        subnet192_loopback = 0;
        subnet192_dmz = 0;
        subnet192_fw_syslog = 0;
        subnet192 = 0;

        if (wan_int_ip1 == "192" && wan_int_ip2 == "168") {

            subnet192_wan = 1;

        }

        if (firewall_int_ip1 == "192" && firewall_int_ip2 == "168") {

            subnet192_fw = 1;

        }

        if (loopback_ip1 == "192" && loopback_ip2 == "168") {

            subnet192_loopback = 1;

        }

        if (local_dmz_ip1 == "192" && local_dmz_ip2 == "168") {

            subnet192_dmz = 1;

        }

        if (firewall_syslog_ip1 == "192" && firewall_syslog_ip2 == "168") {

            subnet192_fw_syslog = 1;

        }

        //If any interface uses a 192.16.x.x through 192.32.x.x network, set variable so it can be reomoved from null routing.

        if ((subnet192_wan == 1) || (subnet192_fw == 1) || (subnet192_loopback == 1) || (subnet192_dmz == 1) || (subnet192_fw_syslog == 1)) {

            subnet192 = 1;

        }

        confcodeappend("! Null routing for BOGON and Martian Addresses&#13;&#10;");
        confcodeappend("! Last updated 1 January 2015&#13;&#10;");
        confcodeappend("! For more info and the latest list, see the following web site:&#13;&#10;");
        confcodeappend("! http://www.cymru.com/Documents/bogon-list.html&#13;&#10;");
        confcodeappend("! &#13;&#10;");

        if ((normal == "yes") || (checkbox_null_route.checked)) {
            confcodeappend("ip route 0.0.0.0 255.0.0.0 null0&#13;&#10;");

            if (subnet10 == 1) {

                confcodeappend("! ip route 10.0.0.0 255.255.255.0 null0 removed&#13;&#10;");
                confcodeappend("! because it is in use on this router.&#13;&#10;");

            } else {

                confcodeappend("ip route 10.0.0.0 255.0.0.0 null0&#13;&#10;");

            }

            confcodeappend("ip route 100.0.0.0 255.192.0.0 null0&#13;&#10;");
            confcodeappend("ip route 127.0.0.0 255.0.0.0 null0&#13;&#10;");
            confcodeappend("ip route 169.254.0.0 255.255.0.0 null0&#13;&#10;");

            if (subnet172 == 1) {

                confcodeappend("! ip route 172.16.0.0 255.240.0.0 null0 removed&#13;&#10;");
                confcodeappend("! because it is in use on this router.&#13;&#10;");

            } else {

                confcodeappend("ip route 172.16.0.0 255.240.0.0 null0&#13;&#10;");

            }

            confcodeappend("ip route 192.0.0.0 255.255.255.0 null0&#13;&#10;");
            confcodeappend("ip route 192.0.2.0 255.255.255.0 null0&#13;&#10;");

            if (subnet192 == 1) {

                confcodeappend("! ip route 192.168.0.0 255.255.0.0 null0 removed&#13;&#10;");
                confcodeappend("! because it is in use on this router.&#13;&#10;");

            } else {

                confcodeappend("ip route 192.168.0.0 255.255.0.0 null0&#13;&#10;");

            }

            confcodeappend("ip route 198.18.100.0 255.254.0.0 null0&#13;&#10;");
            confcodeappend("ip route 198.51.100.0 255.255.255.0 null0&#13;&#10;");
            confcodeappend("ip route 203.0.113.0 255.255.255.0 null0&#13;&#10;");
            confcodeappend("ip route 224.0.0.0 224.0.0.0 null0&#13;&#10;");
            confcodeappend("!&#13;&#10;");

        }

        confcodeappend("!Section 4b: Internet Facing (Outside) ACL&#13;&#10;");
        confcodeappend("!&#13;&#10;");

        if ((normal == "yes") || (checkbox_outside_acl.checked)) {
            confcodeappend("no ip access-list extended inet_in&#13;&#10;");
            confcodeappend("ip access-list extended inet_in&#13;&#10;");

            //Make rule to deny 10.x.x.x inbound if it is not in use
            //on this interface but is in use elsewhere on the router.

            if (subnet10_wan != 1 && subnet10 == 1) {

                confcodeappend("deny ip 10.0.0.0 0.255.255.255 any&#13;&#10;");

            }

            //Make rule to deny 172.16.x.x through 172.32.x.x inbound if it is not in use
            //on this interface but is in use elsewhere on the router.

            if (subnet172_wan != 1 && subnet172 == 1) {

                confcodeappend("deny ip 172.16.0.0 0.15.255.255 any&#13;&#10;");

            }

            //Make rule to deny 192.168.x.x inbound if it is not in use
            //on this interface but is in use elsewhere on the router.

            if (subnet192_wan != 1 && subnet192 == 1) {

                confcodeappend("deny ip 192.168.0.0 0.0.255.255 any&#13;&#10;");

            }

            //Create Wildcard Mask for use in ACL
            fw_mask_1 = 255 - firewall_int_mask1;
            fw_mask_2 = 255 - firewall_int_mask2;
            fw_mask_3 = 255 - firewall_int_mask3;
            fw_mask_4 = 255 - firewall_int_mask4;

            confcodeappend("deny ip " + firewall_int_ip1 + "." + firewall_int_ip2 + "." + firewall_int_ip3 + "." + firewall_int_ip4 + " " + fw_mask_1 + "." + fw_mask_2 + "." + fw_mask_3 + "." + fw_mask_4 + " any log&#13;&#10;");
            confcodeappend("deny udp any any eq syslog&#13;&#10;");
            confcodeappend("deny icmp any any fragments&#13;&#10;");
            confcodeappend("permit ip any any&#13;&#10;");
            confcodeappend("exit&#13;&#10;");
            confcodeappend("interface " + wan_int + "&#13;&#10;");
            confcodeappend("ip access-group inet_in in&#13;&#10;");
            confcodeappend("exit&#13;&#10;");
            confcodeappend("!&#13;&#10;");

        }

        confcodeappend("!Section 4c: Firewall Facing (Inside) ACL&#13;&#10;");
        confcodeappend("!&#13;&#10;");

        if ((normal == "yes") || (checkbox_inside_acl.checked)) {

            confcodeappend("no ip access-list extended firewall_in&#13;&#10;");
            confcodeappend("ip access-list extended firewall_in&#13;&#10;");
            confcodeappend("permit ip " + firewall_int_ip1 + "." + firewall_int_ip2 + "." + firewall_int_ip3 + "." + firewall_int_ip4 + " " + fw_mask_1 + "." + fw_mask_2 + "." + fw_mask_3 + "." + fw_mask_4 + " any log&#13;&#10;");
            confcodeappend("deny ip any any log&#13;&#10;");
            confcodeappend("exit&#13;&#10;");
            confcodeappend("interface " + firewall_int + "&#13;&#10;");
            confcodeappend("ip access-group firewall_in in&#13;&#10;");
            confcodeappend("exit&#13;&#10;");
            confcodeappend("!&#13;&#10;");

        }

        confcodeappend("!Section 5: Logging&#13;&#10;");
        confcodeappend("!&#13;&#10;");

        if (radio_logging == "local_syslog") {

            //Make sure Local DMZ IP ! Null
            if ((local_dmz_ip1 == "") || (local_dmz_ip2 == "") || (local_dmz_ip3 == "") || (local_dmz_ip4 == "")) {

                confcodeappend("!WARNING!&#13;&#10;");
                confcodeappend("! An Octet of the Local DMZ IP Address is blank&#13;&#10;");
                confcodeappend("! You clicked a radio button saying you want to configure a Local DMZ Interface.&#13;&#10;");
                confcodeappend("! Please use your browser's back button and enter a valid Local DMZ IP Address.&#13;&#10;");

            }

            //Make sure each octet of Local DMZ IP is between 0 and 255
            else if (((local_dmz_ip1 < 0) || (local_dmz_ip1 > 255)) || ((local_dmz_ip2 < 0) || (local_dmz_ip2 > 255)) || ((local_dmz_ip3 < 0) || (local_dmz_ip3 > 255)) || ((local_dmz_ip4 < 0) || (local_dmz_ip4 > 255))) {

                confcodeappend("!WARNING!&#13;&#10;");
                confcodeappend("! An Octet of the Local DMZ IP Address is not between 0 and 255&#13;&#10;");
                confcodeappend("! You clicked a radio button saying you want to configure a Local DMZ Interface.&#13;&#10;");
                confcodeappend("! Please use your browser's back button and enter a valid Local DMZ IP Address.&#13;&#10;");

            }

            //Make sure Local DMZ Mask ! Null
            else if ((local_dmz_mask1 == "") || (local_dmz_mask2 == "") || (local_dmz_mask3 == "") || (local_dmz_mask4 == "")) {

                confcodeappend("!WARNING!&#13;&#10;");
                confcodeappend("! An Octet of the Local DMZ Mask is blank&#13;&#10;");
                confcodeappend("! You clicked a radio button saying you want to configure a Local DMZ Interface.&#13;&#10;");
                confcodeappend("! Please use your browser's back button and enter a valid Local DMZ Mask.&#13;&#10;");

            }

            //Make sure each octet of Local DMZ Mask is between 0 and 255
            else if (((local_dmz_mask1 < 0) || (local_dmz_mask1 > 255)) || ((local_dmz_mask2 < 0) || (local_dmz_mask2 > 255)) || ((local_dmz_mask3 < 0) || (local_dmz_mask3 > 255)) || ((local_dmz_mask4 < 0) || (local_dmz_mask4 > 255))) {

                confcodeappend("!WARNING!&#13;&#10;");
                confcodeappend("! An Octet of the Local DMZ Mask is not between 0 and 255&#13;&#10;");
                confcodeappend("! You clicked a radio button saying you want to configure a Local DMZ Interface.&#13;&#10;");
                confcodeappend("! Please use your browser's back button and enter a valid Local DMZ Mask.&#13;&#10;");

            }

            //Make sure Local DMZ Server ! Null
            else if ((local_dmz_syslog_ip1 == "") || (local_dmz_syslog_ip2 == "") || (local_dmz_syslog_ip3 == "") || (local_dmz_syslog_ip4 == "")) {

                confcodeappend("!WARNING!&#13;&#10;");
                confcodeappend("! An Octet of the Local DMZ Syslog Server IP is blank&#13;&#10;");
                confcodeappend("! You clicked a radio button saying you want to configure a Local DMZ Syslog Server.&#13;&#10;");
                confcodeappend("! Please use your browser's back button and enter a valid Local DMZ Syslog Server IP Address.&#13;&#10;");

            }

            //Make sure each octet of Local DMZ Server is between 0 and 255
            else if (((local_dmz_syslog_ip1 < 0) || (local_dmz_syslog_ip1 > 255)) || ((local_dmz_syslog_ip2 < 0) || (local_dmz_syslog_ip2 > 255)) || ((local_dmz_syslog_ip3 < 0) || (local_dmz_syslog_ip3 > 255)) || ((local_dmz_syslog_ip4 < 0) || (local_dmz_syslog_ip4 > 255))) {

                confcodeappend("!WARNING!&#13;&#10;");
                confcodeappend("! An Octet of the Local DMZ Syslog Server IP is not between 0 and 255&#13;&#10;");
                confcodeappend("! You clicked a radio button saying you want to configure a Local DMZ Syslog Server.&#13;&#10;");
                confcodeappend("! Please use your browser's back button and enter a valid Local DMZ Syslog Server IP Address.&#13;&#10;");

            }

            //Make sure Local DMZ Interface Name ! Null
            else if (local_dmz_name == "") {

                confcodeappend("!WARNING!&#13;&#10;");
                confcodeappend("! The Local DMZ Interface Name is blank&#13;&#10;");
                confcodeappend("! You clicked a radio button saying you want to configure a Local DMZ Syslog Server.&#13;&#10;");
                confcodeappend("! Please use your browser's back button and enter a valid Local DMZ Interface Name.&#13;&#10;");

            } else {

                confcodeappend("interface " + local_dmz_name + "&#13;&#10;");
                confcodeappend("ip address " + local_dmz_ip1 + "." + local_dmz_ip2 + "." + local_dmz_ip3 + "." + local_dmz_ip4 + " " + local_dmz_mask1 + "." + local_dmz_mask2 + "." + local_dmz_mask3 + "." + local_dmz_mask4 + " &#13;&#10;");

                confcodeappend("no cdp enable&#13;&#10;");
                confcodeappend("no ip directed-broadcast&#13;&#10;");
                confcodeappend("no ip redirect&#13;&#10;");
                confcodeappend("no ip proxy-arp&#13;&#10;");
                confcodeappend("no ip mask-reply&#13;&#10;");
                confcodeappend("no ip unreachables&#13;&#10;");
                confcodeappend("no mop enabled&#13;&#10;");

                //Check for router models that only do Simple Network Time Protocol (sntp).
                if ((hardware_version >= 1600) && (hardware_version <= 1699) || (hardware_version >= 1003) && (hardware_version <= 1005) || (hardware_version >= 1720) && (hardware_version <= 1729) || (hardware_version >= 1750) && (hardware_version <= 1759)) {

                    confcodeappend("!&#13;&#10;");

                    //For all other models disablee ntp
                } else {

                    confcodeappend("ntp disable&#13;&#10;");

                }

                confcodeappend("no shutdown&#13;&#10;");
                confcodeappend("exit&#13;&#10;");
                confcodeappend("!&#13;&#10;");
                confcodeappend("logging host " + local_dmz_syslog_ip1 + "." + local_dmz_syslog_ip2 + "." + local_dmz_syslog_ip3 + "." + local_dmz_syslog_ip4 + "&#13;&#10;");
                confcodeappend("logging trap 6&#13;&#10;");
                confcodeappend("logging source-interface loopback 0&#13;&#10;");
                confcodeappend("logging buffered 6&#13;&#10;");
                confcodeappend("no logging console&#13;&#10;");
                confcodeappend("no logging monitor&#13;&#10;");
                confcodeappend("!&#13;&#10;");

                //If version is greater than 12.3(4) enable logging of config commands
                if ((ver_major_release >= 12) && (ver_maint_release >= "3") && (ver_maint_revision >= "4") && (radio_encryption == "yes")) {

                    confcodeappend("archive&#13;&#10;");
                    confcodeappend("mkdir flash:/cmd_logs&#13;&#10;");
                    confcodeappend("path flash:/cmdlogs &#13;&#10;");
                    confcodeappend("log config&#13;&#10;");
                    confcodeappend("logging size 200&#13;&#10;");
                    confcodeappend("hidekeys&#13;&#10;");
                    confcodeappend("notify syslog&#13;&#10;");
                    confcodeappend("!&#13;&#10;");

                }

                confcodeappend("ip access-list extended loc-dmz-log-out&#13;&#10;");
                confcodeappend("permit ip " + local_dmz_ip1 + "." + local_dmz_ip2 + "." + local_dmz_ip3 + "." + local_dmz_ip4 + " any eq 514&#13;&#10;");
                confcodeappend("permit tcp host " + vty_trusted_ip1 + "." + vty_trusted_ip2 + "." + vty_trusted_ip3 + "." + vty_trusted_ip4 + " host 0.0.0.0 eq 22 log&#13;&#10;");
                confcodeappend("deny ip any any log&#13;&#10;");
                confcodeappend("exit&#13;&#10;");
                confcodeappend("interface " + local_dmz_name + "&#13;&#10;");
                confcodeappend("ip access-group loc-dmz-log-out out&#13;&#10;");
                confcodeappend("exit&#13;&#10;");
                confcodeappend("!&#13;&#10;");
                confcodeappend("ip access-list extended loc-dmz-log-in&#13;&#10;");
                confcodeappend("permit ip host " + local_dmz_syslog_ip1 + "." + local_dmz_syslog_ip2 + "." + local_dmz_syslog_ip3 + "." + local_dmz_syslog_ip4 + " any eq 22 log&#13;&#10;");
                confcodeappend("deny ip any any log&#13;&#10;");
                confcodeappend("exit&#13;&#10;");
                confcodeappend("interface " + local_dmz_name + "&#13;&#10;");
                confcodeappend("ip access-group loc-dmz-log-in in&#13;&#10;");
                confcodeappend("exit&#13;&#10;");
                confcodeappend("!&#13;&#10;");

            }

        }

        if (radio_logging == "dmz_syslog") {

            //Make sure Firewall DMZ IP ! Null
            if ((firewall_syslog_ip1 == "") || (firewall_syslog_ip2 == "") || (firewall_syslog_ip3 == "") || (firewall_syslog_ip4 == "")) {

                confcodeappend("!WARNING!&#13;&#10;");
                confcodeappend("! An Octet of the Firewall DMZ Syslog IP Address is blank&#13;&#10;");
                confcodeappend("! You clicked a radio button saying you want to configure a Firewall DMZ Syslog Server.&#13;&#10;");
                confcodeappend("! Please use your browser's back button and enter a valid Firewall DMZ Server IP Address.&#13;&#10;");

            }

            //Make sure each octet of Firewall DMZ IP is between 0 and 255
            else if (((firewall_syslog_ip1 < 0) || (firewall_syslog_ip1 > 255)) || ((firewall_syslog_ip2 < 0) || (firewall_syslog_ip2 > 255)) || ((firewall_syslog_ip3 < 0) || (firewall_syslog_ip3 > 255)) || ((firewall_syslog_ip4 < 0) || (firewall_syslog_ip4 > 255))) {

                confcodeappend("!WARNING!&#13;&#10;");
                confcodeappend("! An Octet of the Firewall DMZ IP Address is not between 0 and 255&#13;&#10;");
                confcodeappend("! You clicked a radio button saying you want to configure a Firewall DMZ Server.&#13;&#10;&#13;&#10;");
                confcodeappend("! Please use your browser's back button and enter a valid LFirewall DMZ Server IP Address.&#13;&#10;");

            } else {


                confcodeappend("logging host " + firewall_syslog_ip1 + "." + firewall_syslog_ip2 + "." + firewall_syslog_ip3 + "." + firewall_syslog_ip4 + "&#13;&#10;");
                confcodeappend("logging trap 6&#13;&#10;");
                confcodeappend("logging source-interface loopback 0&#13;&#10;");
                confcodeappend("logging buffered 6&#13;&#10;");
                confcodeappend("no logging console&#13;&#10;");
                confcodeappend("no logging monitor&#13;&#10;");
                confcodeappend("!&#13;&#10;");

                //If code version is > 12.3(4) enable logging of configuration commands
                if ((ver_major_release >= 12) && (ver_maint_release >= "3") && (ver_maint_revision >= "4") && (radio_encryption == "yes")) {

                    confcodeappend("archive&#13;&#10;");
                    confcodeappend("mkdir flash:/cmd_logs&#13;&#10;");
                    confcodeappend("path flash:/cmdlogs &#13;&#10;");
                    confcodeappend("log config&#13;&#10;");
                    confcodeappend("logging size 200&#13;&#10;");
                    confcodeappend("hidekeys&#13;&#10;");
                    confcodeappend("notify syslog&#13;&#10;");
                    confcodeappend("!&#13;&#10;");
                }

                confcodeappend("!&#13;&#10;");

            }

        }

        if (radio_logging == "local_logging") {

            confcodeappend("logging buffered 6&#13;&#10;");
            confcodeappend("no logging console&#13;&#10;");
            confcodeappend("no logging monitor&#13;&#10;");

            //If code version is > 12.3(4) enable logging of config commands
            if ((ver_major_release >= 12) && (ver_maint_release >= "3") && (ver_maint_revision >= "4") && (radio_encryption == "yes")) {

                confcodeappend("archive&#13;&#10;");
                confcodeappend("mkdir flash:/cmd_logs&#13;&#10;");
                confcodeappend("path flash:/cmdlogs &#13;&#10;");
                confcodeappend("log config&#13;&#10;");
                confcodeappend("logging size 200&#13;&#10;");
                confcodeappend("hidekeys&#13;&#10;");
                confcodeappend("notify syslog&#13;&#10;");
                confcodeappend("!&#13;&#10;");
            }

            confcodeappend("!&#13;&#10;");
            confcodeappend("!&#13;&#10;");

            confcodeappend("! This software is not sponsored by, endorsed by or affiliated &#13;&#10;");
            confcodeappend("! with Cisco Systems, Inc.  Cisco, Cisco Systems, and IOS are &#13;&#10;");
            confcodeappend("! registered trademarks of Cisco Systems, Inc. in the USA and &#13;&#10;");
            confcodeappend("! certain other countries.  All other trademarks are trademarks &#13;&#10;");
            confcodeappend("! of their respective owners.&#13;&#10;");

            confcodeappend("! BRST - Border Router Security Tool, Helps administrators &#13;&#10;");
            confcodeappend("! secure their border routers.&#13;&#10;");
            confcodeappend("! Copyright &copy; 2015 Ted LeRoy&#13;&#10;");

        }

        confcodeappend("! Stop Copying Config File Here !");

    }

    document.getElementById('processed-code').innerHTML = configurationcode;
}