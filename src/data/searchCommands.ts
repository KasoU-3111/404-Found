export interface SearchResult {
  title: string;
  description: string;
  url: string;
}

export interface SearchCommand {
  command: string;
  results: SearchResult[];
}

export const searchCommands: SearchCommand[] = [
  {
    command: "Arduino sensor not responding pin configuration",
    results: [
      {
        title: "Advice for detecting sensor error",
        description: "Arduino Forum discussion on troubleshooting sensor detection errors and pin configuration issues",
        url: "https://forum.arduino.cc/t/advice-for-detecting-sensor-error/123456"
      },
      {
        title: "IR sensor does not work when connected to pin 13",
        description: "Common issues with IR sensors on specific Arduino pins and their solutions",
        url: "https://forum.arduino.cc/t/ir-sensor-pin-13-issue/789012"
      },
      {
        title: "Sensors won't deliver data",
        description: "Troubleshooting guide for sensors that fail to send data to Arduino",
        url: "https://forum.arduino.cc/t/sensors-wont-deliver-data/345678"
      },
      {
        title: "Troubleshooting Arduino Projects",
        description: "Industrial Robotics Resource comprehensive troubleshooting guide",
        url: "https://industrialroboticsresource.com/arduino-troubleshooting"
      }
    ]
  },
  {
    command: "Mobile app UI/UX design mistakes to avoid",
    results: [
      {
        title: "10 Tiny UI Fixes That Make a Big Difference",
        description: "Medium article on small UI improvements that significantly enhance user experience",
        url: "https://medium.com/design-bootcamp/10-tiny-ui-fixes"
      },
      {
        title: "10 Common UI Design Mistakes",
        description: "CareerFoundry guide on avoiding frequent UI design pitfalls",
        url: "https://careerfoundry.com/en/blog/ui-design/common-ui-design-mistakes"
      },
      {
        title: "12 Bad UX Examples",
        description: "Eleken showcase of poor UX decisions and how to fix them",
        url: "https://eleken.co/blog/12-bad-ux-examples"
      },
      {
        title: "Mobile App Design Mistakes to Avoid",
        description: "Squareboat comprehensive guide on mobile design best practices",
        url: "https://squareboat.com/blog/mobile-app-design-mistakes"
      }
    ]
  },
  {
    command: "Database normalization mistakes and anomalies examples",
    results: [
      {
        title: "Introduction to Database Normalization",
        description: "GeeksforGeeks comprehensive guide on database normalization concepts",
        url: "https://www.geeksforgeeks.org/introduction-of-database-normalization"
      },
      {
        title: "Database Normalization: A Step-by-Step Guide",
        description: "Analytics Vidhya detailed walkthrough of normalization process",
        url: "https://www.analyticsvidhya.com/blog/database-normalization-guide"
      },
      {
        title: "Normalization in SQL (1NF-5NF): A Beginner's Guide",
        description: "DataCamp tutorial covering all normal forms with examples",
        url: "https://www.datacamp.com/tutorial/normalization-in-sql"
      },
      {
        title: "Maybe Normalizing Isn't Normal",
        description: "Coding Horror Blog perspective on when to avoid normalization",
        url: "https://blog.codinghorror.com/maybe-normalizing-isnt-normal"
      }
    ]
  },
  {
    command: "Drone battery imbalance weight distribution failure causes",
    results: [
      {
        title: "A Critical Review on Drone Battery Reliability",
        description: "MDPI research paper on battery performance and failure modes in drones",
        url: "https://www.mdpi.com/journal/drones/battery-reliability"
      },
      {
        title: "Battery Balancing Algorithm for Agricultural Drones",
        description: "MDPI study on optimizing battery distribution in agricultural applications",
        url: "https://www.mdpi.com/agriculture/battery-balancing"
      },
      {
        title: "Performance Enhancement of Drone LiB State of Charge",
        description: "ScienceDirect research on lithium-ion battery management in UAVs",
        url: "https://www.sciencedirect.com/science/article/drone-battery-soc"
      },
      {
        title: "Energy Depletion Attacks on IoT Devices",
        description: "University of Padua thesis on battery vulnerabilities in IoT and drone systems",
        url: "https://thesis.unipd.it/energy-depletion-iot"
      }
    ]
  },
  {
    command: "UX mistakes mobile pop-ups forced actions study",
    results: [
      {
        title: "Sneaky Patterns of Pop-up Windows in Mobile Ecosystem",
        description: "arXiv research paper analyzing deceptive pop-up patterns in mobile apps",
        url: "https://arxiv.org/abs/mobile-popup-patterns"
      },
      {
        title: "Usability of In-App Browsing Interfaces",
        description: "arXiv study on mobile browsing UX and common usability issues",
        url: "https://arxiv.org/abs/in-app-browsing-usability"
      },
      {
        title: "Automated Reporting of GUI Design Violations",
        description: "arXiv paper on detecting and reporting UX anti-patterns",
        url: "https://arxiv.org/abs/gui-design-violations"
      },
      {
        title: "Top 10 Application-Design Mistakes",
        description: "Nielsen Norman Group analysis of critical app design mistakes",
        url: "https://www.nngroup.com/articles/top-10-application-design-mistakes"
      }
    ]
  }
];
