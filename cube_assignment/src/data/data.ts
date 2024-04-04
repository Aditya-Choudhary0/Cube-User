export interface User {
  id: number;
  name: string;
  title: string;
}

export const users: User[] = [];

for (let i = 1; i <= 1000; i++) {
  users.push({
    id: i,
    name: `User${i}`,
    title:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum doloribus dolore quas commodi? Quaerat debitis in possimus assumenda harum ut ex laudantium, quam provident similique libero exercitationem nisi ea. Natus Incidunt, natus esse, unde consequatur alias, cumque optio exercitationem voluptatem blanditiis et eos officia voluptate totam accusantium pariatur! Asperiores eaque, vero dolorem repellat itaque nam quibusdam molestias iure nemo ullam.",
  });
}

