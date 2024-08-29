import Button from "./components/Button";

function App() {
  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
      <Button pill>Default</Button>
      <Button color="blue" pill={true}>
        Blue
      </Button>
      <Button color="gray" pill={true}>
        Gray
      </Button>
      <Button color="dark" pill={true}>
        Dark
      </Button>
      <Button color="light" pill={true}>
        Light
      </Button>
      <Button color="success" pill={true}>
        Success
      </Button>
      <Button color="failure" pill={true}>
        Failure
      </Button>
      <Button color="warning" pill={true}>
        Warning
      </Button>
      <Button color="purple" pill={true}>
        Purple
      </Button>

      <Button outline>Purple to Blue</Button>
      <Button outline color="blue">Cyan to Blue</Button>

      <Button size="xs">Extra small</Button>
      <Button size="sm">Small</Button>
      <Button size="md">Base</Button>
      <Button size="lg">Large</Button>
      <Button size="xl">Extra large</Button>

      <Button disabled={true}>Disabled button</Button>
    </div>
  );
}

export default App;
