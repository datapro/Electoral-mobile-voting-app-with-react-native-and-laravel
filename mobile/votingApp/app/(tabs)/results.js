import React, { useEffect, useState,useCallback } from 'react';
import { View, Text, Image, FlatList, StyleSheet,TouchableOpacity} from 'react-native';


export default function Results() {
  const [results, setResults] = useState([]);

  const fetchResults = () => {
        fetch('http://10.116.254.143:8000/api/results')
            .then(async (res) => {
            const text = await res.text();
            console.log("RAW RESPONSE:", text);

            try {
                const data = JSON.parse(text);
                setResults(data);
            } catch (e) {
                console.log("JSON PARSE ERROR:", e);
                }
                
            })
            .catch(err => console.log("FETCH ERROR:", err));
        };

       useEffect(() => {
            fetchResults();

            const interval = setInterval(() => {
                fetchResults();
            }, 3000); // every 3 seconds

            return () => clearInterval(interval);
            }, []);

    
    const maxVotes = Math.max(...results.map(r => r.votes_count ?? 0));
    const winners = results.filter(
    r => (r.votes_count ?? 0) === maxVotes
    );

const isTie = winners.length > 1;

  return (
    <View style={styles.container}>
          <Text style={{
              fontSize: 24, fontWeight: 'bold',
              textDecorationLine: 'underline',
              color: '#fff',
              marginBottom: 20,

          }}>
              Realtime Votes count and Winner of The election Processes
          </Text>

      <FlatList
        data={results}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item, index }) => (
          <View style={{ marginBottom: 10 }}>
            
                {results.length > 0 && (
                    <Text style={styles.texthead}>
                        {isTie
                        ? "⚖️ No winner (tie)"
                        : `🏆 Winner is ${winners[0].fullname}`}
                    </Text>
                    )}

                <Text style={{ fontWeight: 'bold', fontSize: 18 }}
                style={styles.text}>
              {item.fullname}
            </Text>

                <Text style={{ color: 'green' }}
                style={styles.text}>
              Total Votes: {item.votes_count ?? 0}
            </Text>

          </View>
        )}
      />
    </View>
  );
}



const styles = StyleSheet.create({
  container: {
        // flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgb(5, 70, 5)',
        // padding: 20,
        elevation: 5,
         marginTop: 30,
         gap:10,
        // paddingBottom: 50,
        height: '90%',       
    },
    text: {
        color: '#fff',
        fontSize: 40,
        marginTop: 10,
    },
    texthead: {
        fontSize: 50,
        fontWeight: 'bold',
        color: 'yellow',
        textShadowColor: 'black',
        textShadowOffset: { width: 2, height: 2 },
        textShadowRadius: 5,
    }
}); 