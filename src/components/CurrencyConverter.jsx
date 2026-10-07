import {
  Alert,
  AlertTitle,
  Box,
  Button,
  CircularProgress,
  MenuItem,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useExchangeRates } from "../hooks/useExchangeRates";

export default function CurrencyConverter() {
  const {
    fromCurrency,
    toCurrency,
    amount,
    result,
    loading,
    error,
    setFromCurrency,
    setToCurrency,
    setAmount,
    convert,
  } = useExchangeRates();

  return (
    <Paper
      elevation={3}
      sx={{
        maxWidth: 600,
        mx: "auto",
        p: { xs: 2, sm: 4 },
        borderRadius: 3,
        textAlign: "left",
      }}
    >
      <Stack spacing={3}>
        <Typography variant="h6" component="h2" sx={{ color: "#1f2937" }}>
          Faça sua conversão
        </Typography>

        <TextField
          label="Valor para converter"
          type="number"
          value={amount}
          onChange={(e) => setAmount(Number(e.target.value))}
          disabled={loading}
          fullWidth
        />

        <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
          <TextField
            select
            label="Moeda de origem"
            value={fromCurrency}
            onChange={(e) => setFromCurrency(e.target.value)}
            disabled={loading}
            fullWidth
          >
            <MenuItem value="USD">USD — Dólar</MenuItem>
            <MenuItem value="EUR">EUR — Euro</MenuItem>
            <MenuItem value="BRL">BRL — Real</MenuItem>
          </TextField>

          <TextField
            select
            label="Moeda de destino"
            value={toCurrency}
            onChange={(e) => setToCurrency(e.target.value)}
            disabled={loading}
            fullWidth
          >
            <MenuItem value="BRL">BRL — Real</MenuItem>
            <MenuItem value="USD">USD — Dólar</MenuItem>
            <MenuItem value="EUR">EUR — Euro</MenuItem>
          </TextField>
        </Stack>

        <Button
          variant="contained"
          size="large"
          onClick={convert}
          disabled={loading}
          fullWidth
        >
          {loading ? "Convertendo..." : "Converter"}
        </Button>

        <Box aria-live="polite" aria-atomic="true">
          {loading && (
            <Stack direction="row" spacing={2} alignItems="center">
              <CircularProgress size={24} aria-label="Buscando cotação" />
              <Typography>Buscando a cotação...</Typography>
            </Stack>
          )}

          {!loading && error && (
            <Alert severity="error" sx={{ overflowWrap: "anywhere" }}>
              <AlertTitle>Não foi possível converter</AlertTitle>
              {error}
              <Box sx={{ mt: 2 }}>
                <Button variant="outlined" color="error" onClick={convert}>
                  Tentar novamente
                </Button>
              </Box>
            </Alert>
          )}

          {!loading && !error && result === null && (
            <Alert severity="info">
              Informe o valor, escolha as moedas e clique em Converter.
            </Alert>
          )}

          {!loading && !error && result !== null && (
            <Alert severity="success" sx={{ overflowWrap: "anywhere" }}>
              <AlertTitle>Resultado da conversão</AlertTitle>
              {amount} {fromCurrency} = {result.toFixed(2)} {toCurrency}
            </Alert>
          )}
        </Box>
      </Stack>
    </Paper>
  );
}
