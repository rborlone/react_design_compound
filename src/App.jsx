import Accordion from "./components/Accordion/Accordion";
import Place from "./components/SearchableList/Place";
import SearchableList from "./components/SearchableList/SearchableList";
import { PLACES } from "./places";

function App() {
  return <main>
    <section>
      <h2>Why work with us?</h2>
      <Accordion className="accordion">
        <Accordion.Item className="accordion-item" id="experiences">
          <Accordion.Title className="accordion-item-title" >We got 20 years of experience</Accordion.Title>
          <Accordion.Content className="accordion-item-content" >
          <article>
            <p>You can't go wrong with us.</p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta veniam error ut temporibus fugiat accusantium est placeat. Dignissimos, accusamus facere necessitatibus tempora quidem aliquam consequatur. Non soluta cupiditate recusandae laudantium?</p>
          </article>
          </Accordion.Content>
        </Accordion.Item>
        <Accordion.Item className="accordion-item" id="local-guides">
          <Accordion.Title className="accordion-item-title" >We're working with local guides</Accordion.Title>
          <Accordion.Content className="accordion-item-content" >
          <article>
            <p>You can't go wrong with us.</p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta veniam error ut temporibus fugiat accusantium est placeat. Dignissimos, accusamus facere necessitatibus tempora quidem aliquam consequatur. Non soluta cupiditate recusandae laudantium?</p>
          </article>
          </Accordion.Content>
        </Accordion.Item>
        </Accordion>
    </section>
    <section>
      <SearchableList items={PLACES} itemKeyFn={(item) => item.id}>{(item) => <Place item={item}/>}</SearchableList>
      <SearchableList items={["item 1", "item 2", "item 3"]} itemKeyFn={(item) => item}>{item => item}</SearchableList>
    </section>
    </main>;
}

export default App;
