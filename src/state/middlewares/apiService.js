import axios from 'axios';

const baseUrl = typeof document === "undefined" ? "http://localhost:8000/api" : "/api";

// Function will receive url method and body