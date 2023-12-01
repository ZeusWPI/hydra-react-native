import { useLibrariesQuery } from "../stores/libraries";
import { LibraryListItemComponent } from "../components/feed/LibraryListItemComponent";
import { StyleSheet, ScrollView } from "react-native";
import { useState } from "react";
import { Library } from "../types/stores";


const LibrariesView = () => {
  const { data: libraryRequest } = useLibrariesQuery();
  const [selectedLibrary, setSelectedLibrary] = useState<Library | null>(null);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {libraryRequest.libraries.map(lib => (
          <LibraryListItemComponent key={lib.link} library={lib} onPress={async () => setSelectedLibrary(lib)} showDetails={lib==selectedLibrary}/>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    alignItems: "center",
  },
});

export default LibrariesView;
