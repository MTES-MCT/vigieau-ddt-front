import type { Ref } from "vue";
import type { AlertDto } from "~/dto/alert.dto";

export const useAlertStore = defineStore('alertStore', () => {
  const alerts: Ref<AlertDto[]> = ref([]);

  function addAlert(alert: AlertDto) {
    alerts.value.push(alert);
  }
  
  function clearAlert(description: string): void {
    const index = alerts.value.findIndex((alert) => alert.description === description); // find alert
    alerts.value.splice(index, 1); // remove alert from array
  }
  
  function clearAll(): void {
    alerts.value = [];
  }

  return { alerts, addAlert, clearAlert, clearAll };
})
