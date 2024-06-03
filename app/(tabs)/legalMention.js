import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const LegalScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Mentions Légales</Text>
        <Text style={styles.subtitle}>1. Informations légales</Text>
        <Text style={styles.paragraph}>
          Ce site web est édité par Sauvez des Vies !, une organisation à but non lucratif enregistrée en France sous le numéro 78517940519 et dont le siège social est situé à Lyon.
        </Text>
        <Text style={styles.paragraph}>
          Directeur de la publication : Nikolaï
        </Text>
        <Text style={styles.subtitle}>2. Conditions d'utilisation</Text>
        <Text style={styles.paragraph}>
          En utilisant ce site web, vous acceptez les conditions générales d'utilisation suivantes :
        </Text>
        <Text style={styles.paragraph}>
          - Vous acceptez que tous les dons effectués sur ce site web sont des dons volontaires et non remboursables.
        </Text>
        <Text style={styles.paragraph}>
          - Vous acceptez que toutes les informations personnelles fournies lors de votre don soient traitées conformément à notre politique de confidentialité.
        </Text>
        <Text style={styles.paragraph}>
          - Vous acceptez que votre don soit utilisé à des fins spécifiées par notre organisation.
        </Text>
        <Text style={styles.subtitle}>3. Politique de confidentialité</Text>
        <Text style={styles.paragraph}>
          Ce site web respecte la vie privée de ses utilisateurs. Toutes les informations personnelles collectées sur ce site web sont traitées conformément à notre politique de confidentialité. Nous ne partagerons jamais vos informations personnelles avec des tiers sans votre consentement.
        </Text>
        <Text style={styles.subtitle}>4. Propriété intellectuelle</Text>
        <Text style={styles.paragraph}>
          Tous les contenus de ce site web, y compris mais non limité aux textes, images, vidéos, logos, et marques de commerce, sont la propriété de [Nom de votre association ou organisation] et sont protégés par les lois sur la propriété intellectuelle.
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
  subtitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  paragraph: {
    fontSize: 16,
    marginBottom: 20,
  },
});

export default LegalScreen;
