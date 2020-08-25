const AttackCardData = [
  {
    name: 'broken_authorization',
    description:
      'In poorly designed authorization systems, access control rules are inserted in various locations all over the code. Many of these flawed access control schemes are not difficult for attackers to discover and exploit.',
    isSelected: false,
  },
  {
    name: 'credential_stuffing',
    description:
      'Credential stuffing is the automated injection of breached username/password pairs in order to fraudulently gain access to user accounts.',
    isSelected: false,
  },
  {
    name: 'cross_site_scripting',
    description:
      'XSS attacks occur when an attacker uses a web application to send malicious code, generally in the form of a browser side script, to a different end user. The end user’s browser has no way to know that the script should not be trusted, and will execute the script.',
    isSelected: false,
  },
  {
    name: 'denial_of_service',
    description:
      'DoS attacks typically function by overwhelming a targeted machine with requests until normal traffic is unable to be processed, resulting in denial-of-service to users.',
    isSelected: false,
  },
  {
    name: 'enumeration',
    description:
      'The process of extracting user names, network resources and more from a system. The attacker creates an active connection to the system and performs queries to gain more information about the target.',
    isSelected: false,
  },
  {
    name: 'insecure_direct_object_reference',
    description:
      'A security vulnerability in which a user is able to access and make changes to data of any other user present in the system.',
    isSelected: false,
  },
  {
    name: 'logic_bomb',
    description:
      'A piece of code that will set off a malicious function when specified conditions are met.',
    isSelected: false,
  },
  {
    name: 'malware',
    description:
      'Malware, or “malicious software,” is an umbrella term that describes any malicious program or code that is harmful to systems.',
    isSelected: false,
  },
  {
    name: 'man_in_the_middle',
    description:
      'A man in the middle (MITM) attack is a general term for when a perpetrator positions himself in a conversation between a user and an application - either to eavesdrop or to impersonate one of the parties, making it appear as if a normal exchange of information is underway.',
    isSelected: false,
  },
  {
    name: 'network_intrusion',
    description:
      'Any unauthorized activity on a digital network, often involving the theft of valuable network resources.',
    isSelected: false,
  },
  {
    name: 'phishing',
    description:
      'The fraudulent practice of sending emails purporting to be from reputable companies in order to induce individuals to reveal personal information.',
    isSelected: false,
  },
  {
    name: 'remote_code_execution',
    description:
      'A vulnerability where an attacker is able to run code of their choosing with system level privileges on a server that possesses the appropriate weakness.',
    isSelected: false,
  },
  {
    name: 'server_side_request_forgery',
    description:
      'An exploit where the attacker can abuse functionality on the server to read or update internal resources.',
    isSelected: false,
  },
  {
    name: 'social_engineering',
    description:
      'The art of manipulating people so they give up confidential information.',
    isSelected: false,
  },
  {
    name: 'spoofing',
    description:
      'The act of disguising a communication from an unknown source as being from a known, trusted source.',
    isSelected: false,
  },
  {
    name: 'sql_injection',
    description:
      'The placement of malicious code in SQL statements, via web page input.',
    isSelected: false,
  },
  {
    name: 'supply_chain_attack',
    description:
      'A supply chain attack occurs when someone infiltrates your system through an outside partner or provider with access to your systems and data.',
    isSelected: false,
  },
  {
    name: 'unrestricted_file_upload',
    description:
      'The first step in many attacks is to get some code to the target system. Then the attacker only needs to find a way to get the code executed. Using a file upload helps the attacker accomplish this step. Consequences including complete system takeover, an overloaded database, and more.',
    isSelected: false,
  },
];

export default AttackCardData;
