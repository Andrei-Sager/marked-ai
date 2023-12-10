import { View, Text, SafeAreaView, ScrollView } from "react-native";
import { Stack, useRouter } from "expo-router";
import CardStack from "../../components/stackdetails/stack/CardStack";

import { ScreenHeaderBtn } from "../../components";

import { COLORS, SIZES, icons } from "../../constants";

const CardStackDetails = () => {
  const router = useRouter();

  return (
    <SafeAreaView style={{ backgroundColor: COLORS.lightWhite }}>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: COLORS.lightWhite },
          headerShadowVisible: false,
          headerTitleAlign: "center",
          headerLeft: () => (
            <ScreenHeaderBtn
              iconUrl={icons.chevronLeft}
              dimension="60%"
              handlePress={() => router.back()}
            />
          ),
          headerTitle: "",
        }}
      />

      <>
        <ScrollView>
          <CardStackDetails />

          <CardStack />
        </ScrollView>
      </>
    </SafeAreaView>
  );
};

export default CardStackDetails;
