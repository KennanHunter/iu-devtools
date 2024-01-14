import { FC, useEffect, useState } from "react";

export const LoremIpsum: FC = () => {
  const [output, setOutput] = useState("");

  const text = [
    `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ante orci, suscipit ut posuere id, dictum nec velit. Etiam sit amet sagittis dolor, vel malesuada enim. Nam purus ligula, blandit sed odio non, semper hendrerit erat. Praesent fermentum ex in ante feugiat, quis commodo mi auctor. Fusce ut risus interdum, facilisis lorem quis, egestas dui. Donec ornare lorem vitae nunc viverra aliquam. Ut nisi urna, vulputate ut dolor vitae, scelerisque dignissim sapien. Suspendisse scelerisque tortor ac urna hendrerit aliquam. Fusce venenatis lacus quis risus viverra, vitae suscipit tellus maximus. Phasellus in facilisis libero, eget rutrum dolor. Pellentesque condimentum, tellus in porta tempor, nisi turpis ullamcorper mauris, eu auctor lorem dolor fermentum odio. Morbi sagittis aliquam purus et volutpat. Vivamus nec tincidunt ex. Phasellus id risus et purus blandit mattis.`,
    `Suspendisse ultrices lacus sit amet tristique auctor. Etiam eu volutpat lacus. Sed placerat interdum neque, sed ornare erat cursus accumsan. Nulla non dolor molestie est posuere maximus. Donec facilisis mi id sapien mattis scelerisque. Quisque cursus, neque ac aliquam tristique, lectus augue malesuada orci, sit amet auctor mauris lacus at elit. Etiam ac nulla pretium, posuere erat in, dignissim magna. Sed auctor iaculis commodo. Aenean massa turpis, faucibus ac tempus in, ultricies quis augue. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed ultricies nisi lorem, ut ultricies velit volutpat in.`,
    `Praesent nec laoreet nulla, ut pretium ex. Nunc et accumsan enim, ut egestas elit. Cras sed sodales risus. In eros nunc, finibus in suscipit quis, imperdiet a ex. Quisque nec ornare erat, ut venenatis augue. Phasellus congue mauris nec felis eleifend lobortis. Aliquam egestas maximus libero eget sollicitudin. Sed placerat lectus nunc. Donec ultrices ornare urna vitae euismod. Pellentesque tempor nulla quis metus feugiat, id ornare arcu feugiat. Duis eu congue turpis. Suspendisse accumsan pellentesque felis, quis tincidunt augue molestie sit amet. Praesent dictum magna non eros hendrerit, et imperdiet eros convallis. Vivamus id ex auctor, lobortis tellus quis, congue urna.`,
    `Nam porta laoreet erat, at pellentesque ipsum dignissim sed. Donec laoreet, justo eget tristique maximus, dolor ante molestie lectus, vitae pharetra diam lorem vel nisi. Fusce sed varius dolor, vel consequat orci. Sed a tristique turpis. Ut eleifend velit ac feugiat suscipit. Cras metus lorem, tincidunt et placerat at, auctor vel enim. Pellentesque egestas diam a odio efficitur, id scelerisque mauris condimentum. Mauris fringilla posuere eros, sed ultricies augue semper in. Suspendisse elementum lacinia ex at pulvinar. Integer nec dictum lectus. Donec vulputate, magna ac efficitur semper, sem enim sodales arcu, faucibus rhoncus massa tortor nec ligula. Proin eget mollis orci, vitae ullamcorper mi.`,
    `Suspendisse fermentum leo a felis tristique, ultricies hendrerit ante interdum. Vestibulum porta tincidunt arcu et venenatis. Pellentesque pellentesque cursus mollis. Suspendisse a tellus mi. Cras feugiat lectus dolor, in porttitor sem feugiat aliquet. Donec id sapien quis orci ultrices rhoncus iaculis in ligula. Maecenas vehicula ut neque at fringilla.`,
    `Nullam faucibus nunc eu magna rhoncus tempor. Morbi vitae varius dolor, at tincidunt massa. Praesent viverra mattis augue, ac tristique magna dictum eget. Integer et nunc tincidunt, feugiat lacus id, porttitor metus. Aliquam at est nunc. Maecenas condimentum ullamcorper augue vel egestas. Cras sem odio, fermentum nec urna et, iaculis pellentesque orci. Proin sapien metus, pharetra sit amet ullamcorper quis, venenatis ac mauris. Integer urna diam, interdum a tempus sit amet, hendrerit id eros. Mauris a ipsum non eros rhoncus egestas. Mauris massa dui, pretium rutrum nunc nec, ullamcorper euismod nisi. Maecenas eu sagittis turpis. Aliquam faucibus nibh purus, vitae blandit nulla sodales et.`,
    `In quis facilisis enim. Donec et neque turpis. Nam iaculis non metus in egestas. Nunc rutrum at diam sed mattis. Suspendisse mollis egestas metus ut sodales. Vivamus porta elementum turpis, vel congue eros. Aliquam rutrum, nisi nec pretium egestas, urna augue maximus libero, ac suscipit turpis erat et quam.`,
    `Sed sed sagittis eros. Quisque eget velit sit amet nibh fringilla dapibus eget non nibh. Nunc luctus massa nec augue ultrices, et tincidunt felis pretium. Sed efficitur eu lorem vel feugiat. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed vel dapibus enim. Cras laoreet blandit libero ut tristique. Etiam eget lorem ac orci ultricies tincidunt eu vel dui. Nulla nec mi dignissim, tristique urna malesuada, lobortis ante.`,
    `Quisque ligula dui, tempor at ante vitae, egestas efficitur neque. Nam volutpat justo sed ipsum sagittis fermentum in vitae velit. Nullam sagittis commodo ante sed porta. Curabitur malesuada odio nunc, eu pharetra justo sodales vel. Curabitur leo ante, facilisis vel pulvinar varius, varius at leo. Fusce finibus congue risus id pharetra. Cras nisl ante, faucibus ac pellentesque ac, vestibulum et est. Suspendisse ut cursus sem. Mauris vitae nunc ut tellus tincidunt laoreet. Nunc at aliquet diam, quis pharetra ipsum. Maecenas erat ipsum, pretium et vestibulum nec, mollis sit amet lectus. Nulla non risus et ligula euismod dictum vitae eu sapien.`,
    `In porta tortor nec placerat vehicula. Sed aliquet semper libero. Phasellus et leo nunc. Aenean iaculis ante in odio faucibus, sodales ornare ex imperdiet. Nam lacus eros, pellentesque id mattis in, ullamcorper posuere sem. Suspendisse vitae augue nec dolor rutrum vestibulum sed ac justo. Maecenas sit amet augue quis dolor bibendum dapibus. Maecenas condimentum, libero suscipit ultricies venenatis, enim neque rutrum ipsum, et lacinia libero arcu vitae lorem. Nam vehicula rhoncus mauris eget volutpat. Donec vel lorem risus. `,
  ];

  const [numberOfParagraphs, setNumberOfParagraphs] = useState(0);

  // contains the lorem ipsum paragraphs
  // contains the number of paragraphs we want
  // where the output will be shown

  useEffect(() => {
    setOutput(text.slice(0, numberOfParagraphs).join("\n"));
  }, [numberOfParagraphs]);

  return (
    <div>
      <h1>Lorem Ipsum Generator</h1>

      <label htmlFor="numofpara">Paragraphs:</label>

      <div className="paraAmountNum">
        <input
          type="number"
          min="1"
          max="10"
          value={numberOfParagraphs}
          id="numofpara"
          onChange={(e) =>
            setNumberOfParagraphs(Number.parseInt(e.currentTarget.value))
          }
        />
      </div>

      <p id="output">{output}</p>
    </div>
  );
};
