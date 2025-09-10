import { useCallback, useEffect, useState } from "react";
import { getListToken, TokenInfo } from "../openocean";
import { useAppKitNetwork } from "@reown/appkit/react";

export function useTokenList() {
  const { chainId } = useAppKitNetwork();
  const [tokens, setTokens] = useState<TokenInfo[]>([]);
  const [tokenLoading, setTokenLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchTokens = useCallback(async () => {
    if (!chainId) return;

    setTokenLoading(true);
    setError("");

    const [tokenList, error] = await getListToken(+chainId);
    if (error) {
      setError(error);
      setTokenLoading(false);
      return;
    }

    const uniqueMap = new Map<string, TokenInfo>();
    tokenList.forEach((token) => {
      const addr = token.address.toLowerCase();
      if (!uniqueMap.has(addr)) {
        uniqueMap.set(addr, token);
      }
    });

    setTokens(Array.from(uniqueMap.values()));
    setTokenLoading(false);
  }, [chainId]);

  const addToken = (token: TokenInfo) => {
    const tokenExists = tokens.find(
      (t) => t.address.toLowerCase() === token.address.toLowerCase(),
    );
    if (!tokenExists) {
      setTokens([token, ...tokens]);
    }
  };

  useEffect(() => {
    fetchTokens();
  }, [chainId, fetchTokens]);

  return {
    tokens,
    tokenLoading,
    error,
    addToken,
  };
}
