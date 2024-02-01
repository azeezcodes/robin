describe("import vue components", () => {
   test("normal imports has expected", async () => {
      const pac = await import("../components/Sidebar.vue");
      expect(pac).toBeDefined();
   });
     test("normal imports has expected", async () => {
        const pac = await import("../components/ChartOne.vue");
        expect(pac).toBeDefined();
     });
});
