import { View } from "react-native";

import AvatarPages from "./features/profile/components/AvatarPages";
import ChooseAvatar from "./features/profile/components/ChooseAvatar";

export default function Container() {
  return (
    <>
      <View style={{ flex: 1 }}>
        <AvatarPages />
        {/* <ChooseAvatar /> */}
      </View>
    </>
  );
}
