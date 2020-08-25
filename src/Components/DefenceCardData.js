const DefenceCardData = [
  {
    name: 'anti_automation',
    description:
      'A service that detects non-human traffic. It can issue challenges (such as a reCaptcha) to confirm that the traffic is human, blocking non-human requests.',
    isSelected: false,
  },
  {
    name: 'application_hardening',
    description:
      'The process of taking a finished application and making it more difficult to reverse engineer and tamper. Involves manipulating existing and injecting new code to shield the application against static and dynamic attacks.',
    isSelected: false,
  },
  {
    name: 'application_whitelisting',
    description:
      'An approach that allows only pre-approved and specified programs to run. Any program not whitelisted is blocked by default.',
    isSelected: false,
  },
  {
    name: 'audit_software',
    description:
      'Specialised programs that perform a variety of audit functions such as sampling databases and generating confirmation letters to customers and vendors. It can highlight exceptions to categories of data and alert the examiner to possible error.',
    isSelected: false,
  },
  {
    name: 'configuration_management',
    description: `A systems engineering process for establishing and maintaining consistency of a product's performance, functional, and physical attributes with its requirements, design, and operational information throughout its life.`,
    isSelected: false,
  },
  {
    name: 'indirect_reference_token',
    description: `A security measure that prevents attackers from directly targeting unauthorized resources.`,
    isSelected: false,
  },
  {
    name: 'malware_scanner',
    description: `Software that performs a deep scan of the computer to prevent malware infection.`,
    isSelected: false,
  },
  {
    name: 'monitoring_and_alerts',
    description: `An incredibly useful component in active security investigations, accelerating event discovery and resolution processes.`,
    isSelected: false,
  },
  {
    name: 'network_firewall',
    description: `A security device used to stop or mitigate unauthorized access to private networks connected to the Internet, especially intranets. The only traffic allowed on the network is defined via firewall policies.`,
    isSelected: false,
  },
  {
    name: 'network_segmentation',
    description: `Segmentation works by controlling how traffic flows among the parts of a network application. You could choose to stop all traffic in one part from reaching another, or you can limit the flow by traffic type, source, destination, and many other options.`,
    isSelected: false,
  },
  {
    name: 'secure_communication',
    description: `Measures and controls taken to deny unauthorized persons information transferred over a network.`,
    isSelected: false,
  },
  {
    name: 'two_factor_authentication',
    description: `A way of 'double-checking' that you’re really the person you’re claiming to be when you log into your online accounts, usually consisting of a password and code sent to your mobile device.`,
    isSelected: false,
  },
  {
    name: 'user_access_policy',
    description: `Outlines the controls placed on both physical access to the computer system and to the software in order to limit access to computer networks and data.`,
    isSelected: false,
  },
  {
    name: 'web_application_firewall',
    description: `An application firewall for HTTP applications. It applies a set of rules to an HTTP conversation, generally covering common attacks such as Cross-site Scripting (XSS) and SQL Injection.`,
    isSelected: false,
  },
];

export default DefenceCardData;
