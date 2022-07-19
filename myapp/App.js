import { Text, View } from "react-native";
import Flex1 from "./components/01-flex/flex1";
import Flex2 from "./components/01-flex/flex2";
import Flex3 from "./components/01-flex/flex3";
import Flex4 from "./components/01-flex/flex4";
import Flex5 from "./components/01-flex/flex5";
import Flex6 from "./components/01-flex/flex6";
import Flex7 from "./components/01-flex/flex7";
import Flex8 from "./components/01-flex/flex8";

const App = () => {
  return (
    <View
      style={{
        flex: 1,
      }}
    >
      {/*       
<Flex1/>
<Flex2/>
<Flex3/>
<Flex4/>
<Flex5/>
<Flex6/>
<Flex7 />
 */}

      <Flex8 />
    </View>
  );
};

export default App;
