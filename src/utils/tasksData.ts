interface Task {
  id: number;
  taskCreator: string;
  taskStatus: string[];
  taskRepeat: boolean;
  taskName: string,
  taskType: "Guest Task" | "Internal Task";
  taskCreated: string;
  taskId: string;
  taskFrom: string;
  taskTo: string;
  btnText: string;
  pendingStatus: {
    pending: boolean;
    taskTime: number;
  };
  rating: {
    rated: boolean;
    star: number;
  };
  details?: boolean;
}

export const tasksData: Task[] = [
  {
    id: 1,
    taskCreator: "Rajesh",
    taskStatus: ["Not Accepted"],
    taskRepeat: true,
    taskName: "Routine Cleaning",
    taskType: "Guest Task",
    taskCreated: " 21 Jul 2024 | 03:00 am",
    taskId: "#68988",
    taskFrom: "Pantry",
    taskTo: "Reception",
    btnText: "Notify Staff",
    pendingStatus: {
      pending: true,
      taskTime: 20
    },
    rating: {
      rated: false,
      star: 0
    }
  },
  {
    id: 2,
    taskCreator: "Rajesh",
    taskStatus: [],
    taskRepeat: true,
    taskName: "Routine Cleaning",
    taskType: "Internal Task",
    taskCreated: " 21 Jul 2024 | 03:00 am",
    taskId: "#68988",
    taskFrom: "Pantry",
    taskTo: "Reception",
    btnText: "View Details",
    pendingStatus: {
      pending: false,
      taskTime: 0
    },
    rating: {
      rated: false,
      star: 0
    }
  },
  {
    id: 3,
    taskCreator: "Rajesh",
    taskStatus: ["Delayed", "Complaint"],
    taskRepeat: true,
    taskName: "Routine Cleaning",
    taskType: "Internal Task",
    taskCreated: " 21 Jul 2024 | 03:00 am",
    taskId: "#68988",
    taskFrom: "Pantry",
    taskTo: "Reception",
    btnText: "View Details",
    pendingStatus: {
      pending: false,
      taskTime: 0
    },
    rating: {
      rated: true,
      star: 1
    }
  },
  {
    id: 4,
    taskCreator: "Rajesh",
    taskStatus: ["Not Accepted"],
    taskRepeat: true,
    taskName: "Routine Cleaning",
    taskType: "Internal Task",
    taskCreated: " 21 Jul 2024 | 03:00 am",
    taskId: "#68988",
    taskFrom: "Pantry",
    taskTo: "Reception",
    btnText: "Notify Staff",
    pendingStatus: {
      pending: true,
      taskTime: 1
    },
    rating: {
      rated: false,
      star: 0
    }
  },
  {
    id: 5,
    taskCreator: "Rajesh",
    taskStatus: [],
    taskRepeat: false,
    taskName: "Routine Cleaning",
    taskType: "Guest Task",
    taskCreated: " 21 Jul 2024 | 03:00 am",
    taskId: "#68988",
    taskFrom: "Pantry",
    taskTo: "Reception",
    btnText: "View Details",
    pendingStatus: {
      pending: false,
      taskTime: 0
    },
    rating: {
      rated: false,
      star: 0
    }
  },
  {
    id: 6,
    taskCreator: "Rajesh",
    taskStatus: ["On-Time", "Complaint"],
    taskRepeat: true,
    taskName: "Routine Cleaning",
    taskType: "Guest Task",
    taskCreated: " 21 Jul 2024 | 03:00 am",
    taskId: "#68988",
    taskFrom: "Pantry",
    taskTo: "Reception",
    btnText: "View Details",
    pendingStatus: {
      pending: false,
      taskTime: 0
    },
    rating: {
      rated: true,
      star: 5
    }
  },
  {
    id: 7,
    taskCreator: "Rajesh",
    taskStatus: ["Ongoing"],
    taskRepeat: false,
    taskName: "Routine Cleaning",
    taskType: "Internal Task",
    taskCreated: " 21 Jul 2024 | 03:00 am",
    taskId: "#68988",
    taskFrom: "Pantry",
    taskTo: "Reception",
    btnText: "",
    pendingStatus: {
      pending: true,
      taskTime: 20
    },
    rating: {
      rated: false,
      star: 0
    }
  },
  {
    id: 8,
    taskCreator: "Rajesh",
    taskStatus: [],
    taskRepeat: true,
    taskName: "Routine Cleaning",
    taskType: "Internal Task",
    taskCreated: " 21 Jul 2024 | 03:00 am",
    taskId: "#68988",
    taskFrom: "Pantry",
    taskTo: "Reception",
    btnText: "View Details",
    pendingStatus: {
      pending: false,
      taskTime: 0
    },
    rating: {
      rated: false,
      star: 0
    }
  },
  {
    id: 9,
    taskCreator: "Rajesh",
    taskStatus: ["On-Time", "Complaint"],
    taskRepeat: true,
    taskName: "Routine Cleaning",
    taskType: "Guest Task",
    taskCreated: " 21 Jul 2024 | 03:00 am",
    taskId: "#68988",
    taskFrom: "Pantry",
    taskTo: "Reception",
    btnText: "View Details",
    pendingStatus: {
      pending: false,
      taskTime: 0
    },
    rating: {
      rated: true,
      star: 5
    }
  },
  {
    id: 10,
    taskCreator: "Rajesh",
    taskStatus: [],
    taskRepeat: false,
    taskName: "Routine Cleaning",
    taskType: "Internal Task",
    taskCreated: " 21 Jul 2024 | 03:00 am",
    taskId: "#68988",
    taskFrom: "Pantry",
    taskTo: "Reception",
    btnText: "Notify Staff",
    pendingStatus: {
      pending: true,
      taskTime: 20
    },
    rating: {
      rated: false,
      star: 0
    },
    details: true
  },
  {
    id: 11,
    taskCreator: "Rajesh",
    taskStatus: [],
    taskRepeat: true,
    taskName: "Routine Cleaning",
    taskType: "Internal Task",
    taskCreated: " 21 Jul 2024 | 03:00 am",
    taskId: "#68988",
    taskFrom: "Pantry",
    taskTo: "Reception",
    btnText: "View Details",
    pendingStatus: {
      pending: false,
      taskTime: 0
    },
    rating: {
      rated: false,
      star: 0
    }
  },
  {
    id: 12,
    taskCreator: "Rajesh",
    taskStatus: ["Delayed"],
    taskRepeat: true,
    taskName: "Routine Cleaning",
    taskType: "Guest Task",
    taskCreated: " 21 Jul 2024 | 03:00 am",
    taskId: "#68988",
    taskFrom: "Pantry",
    taskTo: "Reception",
    btnText: "View Details",
    pendingStatus: {
      pending: false,
      taskTime: 0
    },
    rating: {
      rated: false,
      star: 0
    }
  },
  {
    id: 13,
    taskCreator: "Rajesh",
    taskStatus: [],
    taskRepeat: false,
    taskName: "Routine Cleaning",
    taskType: "Guest Task",
    taskCreated: " 21 Jul 2024 | 03:00 am",
    taskId: "#68988",
    taskFrom: "Pantry",
    taskTo: "Reception",
    btnText: "View Details",
    pendingStatus: {
      pending: false,
      taskTime: 0
    },
    rating: {
      rated: false,
      star: 0
    }
  },
  {
    id: 14,
    taskCreator: "Rajesh",
    taskStatus: ["Delayed", "Complaint"],
    taskRepeat: false,
    taskName: "Routine Cleaning",
    taskType: "Internal Task",
    taskCreated: " 21 Jul 2024 | 03:00 am",
    taskId: "#68988",
    taskFrom: "Pantry",
    taskTo: "Reception",
    btnText: "View Details",
    pendingStatus: {
      pending: false,
      taskTime: 0
    },
    rating: {
      rated: true,
      star: 1
    }
  }
];