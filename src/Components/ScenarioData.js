const ScenarioData = [
  {
    description: `Customers have started reporting that the login screen takes 5 seconds to load.
    Datadog alerts are showing over 10,000 login fails a minute.
    Some new accounts and some accounts older than 4 years are seeing logins from the same ip addresses triggering the login failures.
    `,
    attackCards: ['enumeration', 'credential_stuffing'],
    defenceCards: [
      'anti_automation',
      'web_application_firewall',
      'two_factor_authentication',
    ],
  },
  {
    description: `Many users are reporting that unauthorized campaigns have been sent on their accounts.
    Application log shows same campaign content being created and sent across multiple accounts. Interestingly, all of these accounts are in the same database and their client ids are sequential.
    After looking into the database, we managed to track down the client that created all these campaigns. Surprisingly this client was created recently and is not part of any account which sent out malicious campaigns.    
    `,
    attackCards: ['insecure_direct_object_reference', 'broken_authorization'],
    defenceCards: ['monitoring_and_alerts', 'application_hardening'],
  },
  {
    description: `Large spike in errors reported by the application.
    Errors are centered around one endpoint with search functionality.
    Errors are all related to malformed SQL queries.        
    `,
    attackCards: ['sql_injection', 'enumeration'],
    defenceCards: ['web_application_firewall', 'application_hardening'],
  },
  {
    description: `Customers are reporting that they are unable to login to their accounts.
    Splunk, Datadog and application logs show no sign of credentials being brute forced.
    Application logs show unusual activities from an ip address belonging to a VPN provider.
    Customers are starting to report annoying login dialogs that keep popping up when using the application.   
    `,
    attackCards: [
      'spoofing',
      'cross_site_scripting',
      'social_engineering',
      'phishing',
    ],
    defenceCards: ['two_factor_authentication', 'application_hardening'],
  },
  {
    description: `Website is running slowly on some requests.
    One webserver shows maxed out CPU.
    Investigation reveals that an unknown executable named serviceRSA_debug.exe is running on the machine, taking up all CPU to mine bitcoin. 
    Investigators also located serviceRSA_debug.exe in a temporary upload folder for the .NET application.    
    `,
    attackCards: ['remote_code_execution', 'unrestricted_file_upload'],
    defenceCards: [
      'network_firewall',
      'malware_scanner',
      'audit_software',
      'application_hardening',
      'application_whitelisting',
    ],
  },
  {
    description: `AusCert complains that our website is hosting multiple fake login pages for gmail, microsoft, square one - but we didn’t make any new web pages.
    Investigation discovered many malicious aspx pages in our temporary upload folders.
    When visiting these pages investigators discovered they are fake login pages that forward information to the scammers’ server.        
    `,
    attackCards: [
      'phishing',
      'remote_code_execution',
      'unrestricted_file_upload',
      'spoofing',
    ],
    defenceCards: [
      'application_hardening',
      'malware_scanner',
      'audit_software',
    ],
  },
  {
    description: `SpamHaus has received a complaint about our site and has requested that we take the malicious content down.
    Investigations reveal the content to be a subscribe form created by one of our free tier customers the field was designed to look like an outlook login form.
    The custom input fields contain usernames and passwords.            
    `,
    attackCards: ['phishing', 'spoofing'],
    defenceCards: ['monitoring_and_alerts', 'indirect_reference_token'],
  },
  {
    description: `Clients report that API calls are not working. Ops confirms there are no connectivity issues and no application errors have been logged.
    Investigation has revealed that the DNS entry for our api endpoint is pointing to an unknown IP address.
    We are seeing multiple clients’ API keys being used from a VPN and are now sending campaigns from affected clients.
    Our DNS Hosting Support recently received and approved a request to transfer our DNS zone to a different account under the same provider.            
    `,
    attackCards: ['social_engineering', 'supply_chain_attack'],
    defenceCards: ['monitoring_and_alerts', 'secure_communication'],
  },
  {
    description: `Website is working but very slowly, each page taking 20+ seconds to load.
    Monitoring reports numerous long running requests downloading terabytes of data.
    Investigations using splunk traced these downloads to the ‘Upload Template’ endpoint.            
    `,
    attackCards: ['unrestricted_file_upload', 'denial_of_service'],
    defenceCards: ['application_hardening', 'web_application_firewall'],
  },
  {
    description: `Our customers complain that visiting our marketing page results in high CPU usage and in some instances, they have to terminate the web browser process.
    The page is built with wordpress and investigations found that one plugin contains Monero mining code.
    An automatic refresh of the page happened earlier this week and must have pulled a compromised version of the plugin into your website. 
    `,
    attackCards: ['supply_chain_attack', 'malware'],
    defenceCards: ['malware_scanner', 'audit_software'],
  },
  {
    description: `Customers are complaining that their custom domain keeps getting removed even though they didn’t delete them.
    CAL reveals that there was a deletion of the custom domains, but the request came from an user that does not have access to those accounts.    
    `,
    attackCards: ['insecure_direct_object_reference', 'broken_authorization'],
    defenceCards: ['application_hardening'],
  },
  {
    description: `ITOps was notified that an AD service account named "service_web" attempted to authenticate to our VPN from Russia at 11pm last night.
    “service_web” is a service account used by our web-server for some tasks and is hardcoded in several places in our code.
    Investigators found several aspx shells on public temporary upload folder and an unknown application named "fsociety.exe" running on the server.
    By searching for the file hash of fsociety.exe across all our servers, we’ve found the same executable exists on many other servers.
    `,
    attackCards: [
      'malware',
      'remote_code_execution',
      'unrestricted_file_upload',
      'network_intrusion',
    ],
    defenceCards: [
      'application_hardening',
      'web_application_firewall',
      'application_whitelisting',
      'monitoring_and_alerts',
      'audit_software',
    ],
  },
  {
    description: `Some customers are reporting that they are unable to login to their accounts.
    Datadog Alerts show a high volume of login traffic over the weeked.
    Application logs report a high volume of "User email not found" during this time and Splunk shows some valid logins coming from malicious IP addresses.
    Compliance is reporting that previously good accounts are starting to send spam and phishing campaigns.    
    `,
    attackCards: ['enumeration', 'credential_stuffing'],
    defenceCards: [
      'two_factor_authentication',
      'web_application_firewall',
      'anti_automation',
    ],
  },
  {
    description: `Many users are reporting that unauthorized campaigns have been sent from their accounts.
    Datadog has not reported any alerts of high login volumes for a while.
    Hex logs show that the campaigns were actually created by a CM developer.
    `,
    attackCards: ['phishing', 'social_engineering'],
    defenceCards: ['two_factor_authentication', 'user_access_policy'],
  },
  {
    description: `Many users are reporting that the CM site appears to be down.
    Monitoring reveals a high quantity of incoming packets from UDP port 11211 from various IP addresses.
    Further research reveals 11211 belongs to a tor exit node.
    `,
    attackCards: ['denial_of_service'],
    defenceCards: ['network_firewall'],
  },
  {
    description: `A user reports that a malicious campaign has been sent out from their account.
    Datadog is not showing  a high volume of logins.
    User login history shows no unusual events but Splunk reveals the client uses API calls to send campaigns over our legacy HTTP API endpoint.
    After contacting the client, it is discovered that their marketing guru often runs automated scripts from his machine to send out ad campaigns over the starbucks free wifi.
    `,
    attackCards: ['man_in_the_middle'],
    defenceCards: ['secure_communication'],
  },
  {
    description: `Multiple CM Agency customers report that monthly earnings aren't being paid to their PayPal account.
    An investigation reveals that their PayPal email addresses have been modified to a russian email address before the payment was sent. This change was reverted back to original paypal email and went unnoticed by client.
    Further investigation reveals that no extra authentication is needed to change the PayPal email address of an agency, and each affected agency has the same russian client signed up recently.
    `,
    attackCards: ['broken_authorization'],
    defenceCards: ['application_hardening', 'monitoring_and_alerts'],
  },
  {
    description: `Banks send an urgent email requesting that you investigate a breach on credit card information that they have linked you as the source.
    Initial investigations reveal not much unusual activity on your card processing services, there is however a brief tcp connection initialized randomly from the server to an IP that belongs to the office printer.
    Forensics reveal that your printer has been collecting and leaking CC information from card processing service to an external repository for months.
    `,
    attackCards: ['malware', 'network_intrusion', 'remote_code_execution'],
    defenceCards: [
      'network_segmentation',
      'malware_scanner',
      'application_whitelisting',
      'monitoring_and_alerts',
    ],
  },
  {
    description: `At 7 AM this Monday you get an urgent call : "Thousands of your systems at our datacenter had begin to delete important documents and no one knows why".
    You think it might be an infection from external malware, but your scans and tests indicate no infiltration occurred.
    Unfortunately Paul, your only trusted Linux server guru, angrily resigned a month ago over dispute with his manager and no one else knows the system enough to be of help.
    With great effort and help from “Linux in the nutshell”, you managed to work out that a cron job was setup to delete all backup data - /etc/crontab was last edited a month ago...
    `,
    attackCards: ['malware', 'logic_bomb'],
    defenceCards: [
      'configuration_management',
      'monitoring_and_alerts',
      'user_access_policy',
    ],
  },
  {
    description: `A support person reports that he can no longer open any files on his machine and is being requested to pay bitcoin to unlock them.
    While looking at the machine, you find exported_stat.csv.exe running.
    User confirmed that this file (exported_stat.csv.exe) is a broken exported file he was asked to look into by one of the customer via email.
    `,
    attackCards: ['malware', 'social_engineering', 'phishing'],
    defenceCards: [
      'monitoring_and_alerts',
      'malware_scanner',
      'application_whitelisting',
    ],
  },
  {
    description: `Your honeypot host (10.0.0.98) sent an alert to slack notify everyone that it was visited on port 80 by the screenshot generator service.
    This service is hosted in your ECS cluster and is usually used to fetch screenshots of user's campaign. 
    Upon reviewing graylog, you noticed a high volume of request to take screenshot from one particular user and the service tried to fetch web pages from various ports of localhost interface. The service also proceed to fetch port 80 on all 10.0.0.0/12 address range.
    `,
    attackCards: ['server_side_request_forgery', 'enumeration'],
    defenceCards: ['application_hardening', 'network_firewall'],
  },
];

export default ScenarioData;
