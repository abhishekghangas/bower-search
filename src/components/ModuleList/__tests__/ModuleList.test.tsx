import { render, screen } from "@testing-library/react";
import ModuleList from "../ModuleList";
import axios from "axios";
import MockAdapter from "axios-mock-adapter";

const mock = new MockAdapter(axios);
const mockData = [
  { name: "module1", description: "description1", stars: 10 },
  { name: "module2", description: "description2", stars: 20 },
  { name: "module3", description: "description3", stars: 30 },
  { name: "module4", description: "description4", stars: 40 },
  { name: "module5", description: "description5", stars: 50 },
];

describe("ModuleList", () => {
  beforeEach(() => {
    mock.onGet(/libraries.io\/api\/search/).reply(200, mockData);
  });

  afterEach(() => {
    mock.reset();
  });

  test("renders module list and pagination", async () => {
    render(<ModuleList search="" sort="rank" />);
    expect(await screen.findByText("module1")).toBeInTheDocument();
    expect(screen.getByText("Next")).toBeInTheDocument();
  });
});
