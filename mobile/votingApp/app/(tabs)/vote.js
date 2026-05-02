import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator,
  Alert,
} from "react-native";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

const API_BASE = "http://10.116.254.143:8000/api";

export default function Vote() {
  const [candidates, setCandidates] = useState([]);
  const [loading, setLoading] = useState(true);
  const [voted, setVoted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const test = async () => {
    await AsyncStorage.setItem("test", "hello");
    const value = await AsyncStorage.getItem("test");
    console.log(value);
  };
    // Fetch vote status
  const fetchVoteStatus = async () => {
    try {
      const token = await AsyncStorage.getItem("token");

      if (!token) {
        setVoted(false);
        return;
      }

      const res = await axios.get(`${API_BASE}/me`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setVoted(res.data?.has_voted ?? false);
    } catch (err) {
      console.log("Vote status error:", err?.response?.data || err.message);
      setVoted(false);
    }
  };

  // Fetch candidates
  const fetchCandidates = async () => {
    try {
      const res = await axios.get(`${API_BASE}/allcandidate`);

      // handle Laravel resource responses
      const data = res.data?.data || res.data;

      if (!Array.isArray(data)) {
        throw new Error("Invalid candidates format");
      }

      setCandidates(data);
    } catch (err) {
      console.log("Fetch candidates error:", err.message);
      Alert.alert("Error", "Failed to load candidates");
    }
  };

  // Init
  useEffect(() => {
    const init = async () => {
      setLoading(true);
      await fetchCandidates();
      await fetchVoteStatus();
      await test();
      setLoading(false);
    };

    init();
  }, []);

  // Vote
  const handleVote = async (candidateId) => {
    if (voted || submitting) return;

    Alert.alert(
      "Confirm Vote",
      "Are you sure you want to vote? This cannot be changed.",
      [
        { text: "Cancel", style: "cancel" },
        {
          text: "Vote",
          onPress: async () => {
            try {
              setSubmitting(true);

              const token = await AsyncStorage.getItem("token");

              if (!token) {
                Alert.alert("Error", "User not logged in");
                return;
              }

              await axios.post(
                `${API_BASE}/vote`,
                { candidate_id: candidateId },
                {
                  headers: {
                    Authorization: `Bearer ${token}`,
                  },
                }
              );

              setVoted(true);
              Alert.alert("Success", "Your vote has been recorded!");
            } catch (err) {
              console.log(err?.response?.data || err.message);

              Alert.alert(
                "Error",
                err?.response?.data?.message || "Voting failed"
              );
            } finally {
              setSubmitting(false);
            }
          },
        },
      ]
    );
  };

  // Render
  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <Text style={styles.name}>Candidate Name: {item.fullname}</Text>
      <Text style={styles.position}>Position: {item.position}</Text>
      <Text style={styles.position}>Party: {item.department}</Text>
      <Text style={styles.position}>AKA : {item.nickName}</Text>

      <TouchableOpacity
        style={[styles.button, voted && styles.disabledButton]}
        disabled={voted || submitting}
        onPress={() => handleVote(item.id)}
      >
        <Text style={styles.buttonText}>
          {submitting ? "Processing..." : voted ? "Voted" : "Vote"}
        </Text>
      </TouchableOpacity>
    </View>
  );

  // Loading UI
  if (loading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  // Empty state
  if (candidates.length === 0) {
    return (
      <View style={styles.center}>
        <Text>No candidates available</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Vote for Your Candidate</Text>

      {voted && (
        <Text style={styles.success}>
          ✅ You have already voted
        </Text>
      )}

      <FlatList
        data={candidates}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  title: { fontSize: 20, fontWeight: "bold", marginBottom: 10 },
  success: { color: "green", marginBottom: 10 },
  card: {
    padding: 15,
    backgroundColor: "#f5f5f5",
    borderRadius: 10,
    marginBottom: 10,
    elevation: 6,
  },
  name: { fontSize: 18, fontWeight: "bold" },
  position: { color: "gray", marginBottom: 5 },
  button: {
    backgroundColor: "rgb(5, 70, 5)",
    padding: 10,
    borderRadius: 8,
    alignItems: "center",
  },
  disabledButton: { backgroundColor: "gray" },
  buttonText: { color: "#fff", fontWeight: "bold" },
  center: { flex: 1, justifyContent: "center", alignItems: "center" },
});