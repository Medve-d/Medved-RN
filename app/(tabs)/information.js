import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const InfoScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>À Propos de Sauvez des Vies !</Text>
        <Text style={styles.paragraph}>
          "Sauvez des Vies !" est une association à but non lucratif dédiée à la sensibilisation et à la prévention des accidents et des situations d'urgence. Notre mission est de fournir des informations et des ressources pour aider les gens à réagir de manière appropriée en cas d'urgence et à sauver des vies.
        </Text>
        <Text style={styles.paragraph}>
          Depuis notre création en 2024, nous travaillons sans relâche pour promouvoir la sécurité et le bien-être de la communauté. Nous organisons régulièrement des sessions de formation sur les premiers secours, les techniques de réanimation cardio-pulmonaire (RCP), et d'autres compétences essentielles en cas d'urgence.
        </Text>
        <Text style={styles.paragraph}>
          En plus de nos programmes de sensibilisation, nous collaborons avec d'autres organisations, les services d'urgence et les professionnels de la santé pour fournir des ressources et un soutien aux personnes affectées par des accidents ou des catastrophes.
        </Text>
        <Text style={styles.paragraph}>
          Si vous souhaitez en savoir plus sur notre association ou participer à nos initiatives, n'hésitez pas à nous contacter. Ensemble, nous pouvons sauver des vies !
        </Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  content: {
    flex: 1,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  paragraph: {
    fontSize: 16,
    marginBottom: 20,
  },
});

export default InfoScreen;
