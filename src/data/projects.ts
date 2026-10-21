export type ProjectImage = {
  src: string;
  width: number;
  height: number;
  alt: string;
};

export type Project = {
  id: string;
  title: string;
  paragraphs: string[];
  purpose?: {
    heading: string;
    text: string;
  };
  images: ProjectImage[];
};

const img = (src: string, width: number, height: number, alt: string): ProjectImage => ({
  src,
  width,
  height,
  alt,
});

export const projects: Project[] = [
  {
    id: "hospital-management",
    title: "HOSPITAL MANAGEMENT SYSTEM (Appointment Booking)",
    paragraphs: [
      "This web-based system is developed to facilitate seamless appointment scheduling between patients and doctors. Patients can conveniently book appointments with their preferred healthcare providers at any time, ensuring accessibility and flexibility. Simultaneously, the system empowers doctors to efficiently manage their schedules by allowing them to accept or decline appointment requests based on their availability.",
    ],
    purpose: {
      heading: "Project Purpose",
      text: "The system enables patients to book appointments with doctors anytime and allows doctors to manage, accept, or decline requests based on their availability",
    },
    images: [
      img("/img3.png", 1897, 879, "Hospital management system screenshot 1"),
      img("/img4.png", 1879, 775, "Hospital management system screenshot 2"),
      img("/img5.png", 1894, 886, "Hospital management system screenshot 3"),
      img("/img6.png", 1882, 867, "Hospital management system screenshot 4"),
      img("/img7.png", 1894, 404, "Hospital management system screenshot 5"),
      img("/img8.png", 1887, 860, "Hospital management system screenshot 6"),
      img("/img9.png", 1873, 647, "Hospital management system screenshot 7"),
      img("/img10.png", 1894, 885, "Hospital management system screenshot 8"),
      img("/img11.png", 1915, 880, "Hospital management system screenshot 9"),
      img("/img12.png", 1908, 886, "Hospital management system screenshot 10"),
      img("/img13.png", 1890, 859, "Hospital management system screenshot 11"),
    ],
  },
  {
    id: "donor-os",
    title: "DonorOS: Blood Donor Management",
    paragraphs: [
      "DonorOS is a Java-based blood donor management system developed to streamline the process of managing blood donors, recipients, and donation events. It allows users (admin or staff) to register donors, manage their records, search for eligible donors by blood type, and keep track of donations. The system ensures quick and reliable access to critical donor data during emergencies.",
    ],
    purpose: {
      heading: "Project Purpose",
      text: "The manual system of tracking donors through paper records or scattered files is inefficient and error-prone. DonorOS aims to replace such methods with a centralized, secure, and user-friendly digital system. It ensures that hospitals and blood banks can quickly find eligible donors, reducing response time in critical situations.",
    },
    images: [
      img("/img14.png", 1048, 514, "DonorOS screenshot 1"),
      img("/img15.png", 1042, 520, "DonorOS screenshot 2"),
      img("/img16.png", 1042, 610, "DonorOS screenshot 3"),
      img("/img17.png", 829, 535, "DonorOS screenshot 4"),
      img("/img18.png", 1042, 568, "DonorOS screenshot 5"),
      img("/img19.png", 1027, 597, "DonorOS screenshot 6"),
      img("/img20.png", 1036, 532, "DonorOS screenshot 7"),
      img("/img21.png", 1032, 595, "DonorOS screenshot 8"),
      img("/img22.png", 1032, 603, "DonorOS screenshot 9"),
      img("/img23.png", 1036, 558, "DonorOS screenshot 10"),
    ],
  },
  {
    id: "todo-list",
    title: "TODO LIST WEB APP",
    paragraphs: [
      "A simple and fully responsive To-Do List application built using HTML, CSS, and JavaScript. It allows users to easily manage their daily tasks in an interactive way. User can add new tasks with ease, Mark tasks as completed using checkboxes, Remove completed tasks with a single click, Clear all tasks at once.",
    ],
    images: [img("/todoweb.png", 1182, 538, "To-Do list web app screenshot")],
  },
  {
    id: "weather-report",
    title: "WEATHER REPORT WEB APP",
    paragraphs: [
      "A simple weather web application that allows users to search for the current weather in any city. It uses the OpenWeatherMap API to fetch real-time weather data and displays temperature, and location information in a clean UI.",
    ],
    images: [img("/weatherrecord.png", 1183, 540, "Weather report web app screenshot")],
  },
  {
    id: "travel-website",
    title: "Travel Website",
    paragraphs: [
      "A sleek and interactive travel website designed with smooth navigation, real-time country search, and a visually captivating landing page. It blends modern aesthetics with functionality to deliver a seamless browsing experience.",
    ],
    purpose: {
      heading: "Project Purpose",
      text: "To simplify exploration by giving users an engaging platform where they can quickly search destinations, discover recommendations, and enjoy a user-friendly, stylish interface powered by dynamic JavaScript features.",
    },
    images: [
      img("/img-43.png", 1909, 889, "Travel website screenshot 1"),
      img("/img-44.png", 1890, 850, "Travel website screenshot 2"),
      img("/img-45.png", 1920, 355, "Travel website screenshot 3"),
      img("/img-46.png", 1872, 707, "Travel website screenshot 4"),
      img("/img-47.png", 1885, 676, "Travel website screenshot 5"),
      img("/img-48.png", 1879, 879, "Travel website screenshot 6"),
      img("/img-49.png", 1906, 874, "Travel website screenshot 7"),
    ],
  },
];
