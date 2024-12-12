import { createClient } from "@libsql/client";

export const turso = createClient({
  url: 'libsql://elplax-ivanjialo.aws-eu-west-3.turso.io',
  authToken: 'eyJhbGciOiJFZERTQSIsInR5cCI6IkpXVCJ9.eyJhIjoicnciLCJpYXQiOjE3MzQwMTM4ODQsImlkIjoiZjcwNWE4M2UtM2VlYS00ZmRmLWIyM2ItOTY0YTJiMWIzODA3In0._dyBKlWQpMGBTkOcU0VXVsUlpJjlnJsFyEdX720nzaEZfKffDR0FGaRLGrZvyBoRZsdrnX-5XX4RWsrZ_ueJBw',
});
