
import React from 'react';
import { Document, Page, Text, View, Image, PDFViewer } from '@react-pdf/renderer';
import styles from './PDFGenerator.css'; 

const PDFGenerator = ({ formData, imageData }) => {
  const maxDetailHeight = 600; 
  let firstPageDetails = [];
  let secondPageDetails = [];

  const calculateDetailHeight = (value) => {
    return value.toString().length * 4; 
  };

  let totalHeight = 0;
  for (const [key, value] of Object.entries(formData)) {
    const detailHeight = calculateDetailHeight(value);
    if (totalHeight + detailHeight < maxDetailHeight) {
      firstPageDetails.push({ key, value });
      totalHeight += detailHeight;
    } else {
      secondPageDetails.push({ key, value });
    }
  }

  return (
    <PDFViewer style={{ width: '100%', height: '100vh' }}>
      <Document>
        <Page size="A4" style={styles.page}>
          <View style={styles.section}>
            {imageData && (
              <Image src={imageData} style={styles.image} />
            )}
            <View style={styles.details}>
              {firstPageDetails.map(({ key, value }) => (
                <View style={styles.detail} key={key}>
                  <Text style={styles.label}>{key}:</Text>
                  <Text style={styles.value}>{value}</Text>
                </View>
              ))}
            </View>
          </View>
        </Page>
        {secondPageDetails.length > 0 && (
          <Page size="A4" style={styles.page}>
            <View style={styles.section}>
              <View style={styles.details}>
                {secondPageDetails.map(({ key, value }) => (
                  <View style={styles.detail} key={key}>
                    <Text style={styles.label}>{key}:</Text>
                    <Text style={styles.value}>{value}</Text>
                  </View>
                ))}
              </View>
            </View>
          </Page>
        )}
      </Document>
    </PDFViewer>
  );
};

export default PDFGenerator;
