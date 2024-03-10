import React, { useState } from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import MapView, { Marker, Callout } from "react-native-maps";
import { apartments } from "../../../utils/data";

const MapScreen = () => {
  const [selectedApartment, setSelectedApartment] = useState(null);

  const handleMarkerPress = (item) => {
    setSelectedApartment(item);
  };

  return (
    <View style={{ flex: 1 }}>
      <MapView
        style={{ flex: 1 }}
        initialRegion={{
          latitude: 34.206123,
          longitude: 72.0298,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        {apartments.map((item, index) => (
          <Marker
            key={index}
            coordinate={{ latitude: item.lat, longitude: item.long }}
            title={item.title}
            description={item.subtitle}
            onPress={() => handleMarkerPress(item)}
          >
            <View style={styles.marker}>
              <Text style={styles.markerText}>
                {item.price.replace("/month", "")}
              </Text>
            </View>
          </Marker>
        ))}
      </MapView>

      {selectedApartment && (
        <View style={styles.selectedApartmentContainer}>
          <Text style={styles.selectedApartmentTitle}>
            {selectedApartment.title}
          </Text>
          <Image
            source={{ uri: selectedApartment?.image }}
            style={styles.selectedApartmentImage}
          />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  marker: {
    backgroundColor: "red",
    borderWidth: 2,
    padding: 2,
    borderRadius: 20,
    borderColor: "white",
  },
  markerText: {
    color: "white",
  },
  selectedApartmentContainer: {
    position: "absolute",
    bottom: 10,
    left: 10,
    right: 10,
    backgroundColor: "white",
    padding: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#ddd",
  },
  selectedApartmentTitle: {
    fontWeight: "bold",
    fontSize: 16,
    marginBottom: 5,
  },
  selectedApartmentImage: {
    width: "100%",
    height: 150,
    borderRadius: 5,
    resizeMode: "cover",
    // aspectRatio: 1,
  },
});

export default MapScreen;
